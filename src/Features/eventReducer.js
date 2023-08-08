import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { musicData } from '../Data/data'

const initialState = {
  toNextPage: false,
  musicList: musicData,
  recommendList: [],
  musicPlayId: 0,
  musicIsPaused: false,
  musicIsLoading: false,
  currentlyPlaying: '',
  showMusicPage: false,
  songDuration: 0.0,
  currentDuration: 0.0,
  progressBar: 0,
  songPlaying: [],
  playRandomSong: false,
  repeatSong: false,
  likedIndexes: [],
  likedSongs: [],
}

export const playMusic = createAsyncThunk(
  'actions/getMusic',
  async (payload, thunkAPI) => {
    const { musicIsPaused } = thunkAPI.getState().eventSlice
    let newAudios = document.createElement('audio')
    newAudios.src = payload
    let audios = document.querySelectorAll('audio')

    try {
      for (const audio of audios) {
        audio.onplay = (e) => {
          for (const currentAudio of audios) {
            if (currentAudio !== e.target) {
              currentAudio.pause()
            }
          }
        }

        if (musicIsPaused) {
          await audio.play()
        }
      }

      return payload
    } catch (error) {
      console.log(error)
    }
  }
)

export const formatTime = (sec) => {
  const minutes = Math.floor(Number(sec) / 60)
  const remainingSeconds = Math.floor(Number(sec) % 60)
  return `${minutes}:${
    remainingSeconds < 10 ? '0' + remainingSeconds.toString() : remainingSeconds
  }`
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    moveToMainPage: (state) => {
      state.toNextPage = true
    },
    getRecommendList: (state) => {
      state.recommendList = state.musicList.filter((value) => value.recommended)
    },
    getMusicPlayId: (state, action) => {
      state.musicPlayId = action.payload
    },
    displayAndPlayMusic: (state, action) => {
      // state.currentlyPlaying = action.payload
      const { currentlyPlaying, musicPlayId } = action.payload
      state.musicPlayId = musicPlayId
      state.currentlyPlaying = currentlyPlaying
      state.showMusicPage = true
    },
    pauseMusic: (state, action) => {
      state.musicIsPaused = true
      let audios = document.querySelectorAll('audio')
      for (const audio of audios) {
        if (audio.src === action.payload) {
          audio.pause()
        }
      }
    },
    updateSongTime: (state, action) => {
      const { currentTime, duration } = action.payload
      state.songDuration = duration | '0:00'
      state.currentDuration = currentTime
      state.progressBar = (currentTime / duration) * 100
    },

    musicController: (state, action) => {
      let audios = document.querySelectorAll('audio')
      for (const audio of audios) {
        const seekTime = (action.payload / 100) * state.songDuration
        audio.currentTime = seekTime
      }
    },
    hideMusicPage: (state, action) => {
      state.showMusicPage = false
    },
    getCurrentlyPlaying: (state, action) => {
      state.songPlaying = state.musicList.filter(
        (value) => value.songUrl === state.currentlyPlaying
      )
    },
    playNext: (state, action) => {
      let nextSong = state.musicPlayId
      let randomSong = Math.floor(Math.random() * state.musicList.length)

      if (!state.musicIsLoading) {
        if (nextSong >= state.musicList.length) {
          nextSong = 1
        } else {
          nextSong += 1
        }

        if (state.playRandomSong) {
          if (randomSong === nextSong || randomSong === 0) {
            randomSong = nextSong
          }
          nextSong = randomSong
        }

        state.musicPlayId = nextSong
      }
    },
    playPrev: (state, action) => {
      let nextSong = state.musicPlayId
      let randomSong = Math.floor(Math.random() * state.musicList.length)
      if (!state.musicIsLoading) {
        if (nextSong <= 1) {
          nextSong = state.musicList
        } else {
          nextSong -= 1
        }

        if (state.playRandomSong) {
          if (randomSong === nextSong || randomSong === 0) {
            randomSong = nextSong
          }
          nextSong = randomSong
        }

        state.musicPlayId = nextSong
      }
    },
    togglePlayRandomSong: (state, action) => {
      state.playRandomSong = !state.playRandomSong
    },
    toggleRepeatSong: (state, action) => {
      state.repeatSong = !state.repeatSong
    },
    restartSong: (state, action) => {
      let audios = document.querySelectorAll('audio')
      for (const audio of audios) {
        audio.currentTime = 0
      }
    },

    addToLikes: (state, action) => {
      const findIndex = state.likedIndexes.find(
        (value) => value === action.payload
      )
      if (findIndex) {
        state.likedIndexes = state.likedIndexes.filter(
          (value) => value !== action.payload
        )
      } else {
        state.likedIndexes = [...state.likedIndexes, action.payload]
      }
    },

    getLikedSongs: (state, action) => {
      let likedSongs = state.musicList.filter((value) =>
        state.likedIndexes.includes(value.id)
      )
      state.likedSongs = likedSongs
    },
  },
  extraReducers(builder) {
    builder
      .addCase(playMusic.pending, (state, action) => {
        state.musicIsPaused = true
        state.musicIsLoading = true
      })
      .addCase(playMusic.fulfilled, (state, action) => {
        state.musicIsPaused = false
        state.musicIsLoading = false
        state.currentlyPlaying = action.payload
      })
      .addCase(playMusic.rejected, (state, action) => {
        console.log(action.error)
      })
  },
})

export const {
  moveToMainPage,
  getRecommendList,
  getMusicPlayId,
  getCurrentlyPlaying,
  displayAndPlayMusic,
  hideMusicPage,
  pauseMusic,
  musicController,
  updateSongTime,
  playNext,
  playPrev,
  togglePlayRandomSong,
  toggleRepeatSong,
  restartSong,
  addToLikes,
  getLikedSongs,
} = eventSlice.actions
export default eventSlice.reducer
