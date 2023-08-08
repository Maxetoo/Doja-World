import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { IoMdRepeat, IoIosArrowUp } from 'react-icons/io'
import { BiShuffle } from 'react-icons/bi'
import { FaPlay, FaPause, FaSnowflake } from 'react-icons/fa'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { useSelector, useDispatch } from 'react-redux'
import {
  playMusic,
  pauseMusic,
  musicController,
  updateSongTime,
  formatTime,
  playNext,
  playPrev,
  togglePlayRandomSong,
  toggleRepeatSong,
  restartSong,
} from '../../Features/eventReducer'
// IoRepeat
// import {
//   fetchMusic,
//   playMusic,
//   pauseMusic,
//   updateSongTime,
//   formatTime,
//   toggleRandomSong,
//   toggleRepeatActive,
//   musicController,
//   onMusicPause,
// } from '../../Features/effectReducer'
// BiShuffle
// FaPlay
// FaPause
// CgPlayTrackNext
// CgPlayTrackPrev
// IoIosArrowUp
const Main = () => {
  const audioRef = useRef()
  const navigate = useNavigate()

  const {
    musicPlayId,
    musicList,
    musicIsLoading,
    musicIsPaused,
    progressBar,
    currentDuration,
    songDuration,
    playRandomSong,
    repeatSong,
    currentlyPlaying,
    showMusicPage,
  } = useSelector((store) => store.eventSlice)
  const [musicDetails, setMusicDetails] = useState([{}])
  const dispatch = useDispatch()

  useEffect(() => {
    const getSongDetails = musicList.find((value) => value.id === +musicPlayId)
    setMusicDetails(getSongDetails)
  }, [musicPlayId])

  const { title, artists, songUrl } = musicDetails || []

  useEffect(() => {
    if (songUrl) {
      dispatch(playMusic(songUrl))
    }
  }, [songUrl])

  useEffect(() => {
    let audios = document.querySelectorAll('audio')
    for (const audio of audios) {
      audio.addEventListener('timeupdate', (e) => {
        dispatch(
          updateSongTime({
            currentTime: audio.currentTime,
            duration: audio.duration,
          })
        )

        if (audio.currentTime === audio.duration) {
          if (repeatSong) {
            dispatch(restartSong())
          } else {
            dispatch(playNext())
          }
        }
      })
    }

    return () => {
      for (const audio of audios) {
        audio.removeEventListener('timeupdate', () => {
          dispatch(
            updateSongTime({
              currentTime: audio.currentTime,
              duration: audio.duration,
            })
          )
        })
      }
    }
  }, [])

  return (
    <>
      {/* {currentlyPlaying && ( */}
      <Wrapper>
        <div className='main-music-section'>
          <h2>{title}</h2>
          <p>{artists}</p>
          <div className='range-container'>
            <audio ref={audioRef} src={songUrl}></audio>
            <input
              type='range'
              defaultValue='0'
              value={progressBar | 0}
              onChange={(e) => dispatch(musicController(e.target.value))}
            />
            <div className='time-stamp'>
              <p>{musicIsLoading ? '0:00' : formatTime(currentDuration)}</p>
              <p>{musicIsLoading ? '0:00' : formatTime(songDuration)}</p>
            </div>
          </div>
          <div className='music-controls'>
            <IoMdRepeat
              color={repeatSong ? '#8dbbff' : 'white'}
              onClick={() => dispatch(toggleRepeatSong())}
            />
            <div className='navigation-controls'>
              <CgPlayTrackPrev onClick={() => dispatch(playPrev())} />
              <div
                className='toggle-play'
                onClick={() => {
                  musicIsPaused
                    ? dispatch(playMusic(songUrl))
                    : dispatch(pauseMusic(songUrl))
                }}
              >
                {!musicIsPaused ? <FaPause /> : <FaPlay />}
              </div>
              <CgPlayTrackNext onClick={() => dispatch(playNext())} />
            </div>
            <BiShuffle
              color={playRandomSong ? '#8dbbff' : 'white'}
              onClick={() => dispatch(togglePlayRandomSong())}
            />
          </div>
          <div className='music-footer'>
            <IoIosArrowUp />
            <p>{musicIsLoading ? 'Loading...' : 'Lyrics'}</p>
          </div>
        </div>
      </Wrapper>
      {/* )} */}
    </>
  )
}

const Wrapper = styled.article`
  .main-music-section {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  p {
    margin-top: 0.2rem;
    opacity: 0.8;
  }

  .range-container {
    margin-top: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 100%;
    cursor: pointer;
  }

  .time-stamp {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .time-stamp p {
    margin-top: 0.3rem;
    font-size: 0.8em;
  }
  .music-controls {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: -1rem;
    font-size: 1.3em;
    cursor: pointer;
  }

  .navigation-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
  }

  .toggle-play {
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    background: var(--btn-color);
    font-size: 0.8em;
    cursor: pointer;
    margin: 2rem;
  }

  .music-footer {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Main
