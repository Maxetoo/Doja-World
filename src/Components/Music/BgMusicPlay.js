import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { FaPlay, FaPause, FaSnowflake } from 'react-icons/fa'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { useSelector, useDispatch } from 'react-redux'
import {
  getMusicPlayId,
  displayAndPlayMusic,
  playMusic,
  pauseMusic,
  playNext,
} from '../../Features/eventReducer'
// import { getCurrentlyPlaying, playMusic } from '../../Features/effectReducer'
const Bgplay = () => {
  const {
    musicPlayId,
    musicList,
    currentlyPlaying,
    showMusicPage,
    musicIsPaused,
  } = useSelector((store) => store.eventSlice)
  const [musicDetails, setMusicDetails] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getSongDetails = musicList.find((value) => value.id === +musicPlayId)
    setMusicDetails(getSongDetails)
  }, [musicPlayId])

  const { title, artists, songUrl, image, id } = musicDetails || musicList[0]
  return (
    <>
      {currentlyPlaying && !showMusicPage && (
        <Wrapper>
          <div
            className='music-sec'
            onClick={() => {
              //   dispatch(getMusicPlayId(id))
              //   dispatch(displayAndPlayMusic(songUrl))
              dispatch(
                displayAndPlayMusic({
                  currentlyPlaying: songUrl,
                  musicPlayId: id,
                })
              )
            }}
          >
            <img src={image} alt={title} className='bgplay-img' />
            <div className='music-details'>
              <div className='name'>
                <h4>{title}</h4>
              </div>
              <div className='artist'>
                <p>{artists}</p>
              </div>
            </div>
          </div>
          <div className='controls-sec'>
            <div
              className='pause-play'
              onClick={() => {
                musicIsPaused
                  ? dispatch(playMusic(songUrl))
                  : dispatch(pauseMusic(songUrl))
              }}
            >
              {!musicIsPaused ? <FaPause /> : <FaPlay />}
            </div>
            <div className='next'>
              <CgPlayTrackNext onClick={() => dispatch(playNext())} />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: var(--page-bg);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 100;
  padding: 1rem;
  /* padding-left: 4rem;
  padding-right: 4rem; */
  margin-bottom: 5rem;

  .music-sec {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .bgplay-img {
    height: 100%;
    width: 60px;
    background: #f5f5f5;
  }

  .music-details {
    margin-left: 1rem;
  }

  p {
    opacity: 0.8;
    font-size: 0.8em;
  }

  .controls-sec {
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .next {
    font-size: 2em;
  }
`

export default Bgplay
