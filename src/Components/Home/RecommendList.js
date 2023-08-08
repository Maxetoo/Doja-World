import React from 'react'
import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa'
import { Routes, Route, Link } from 'react-router-dom'
import {
  getMusicPlayId,
  displayAndPlayMusic,
} from '../../Features/eventReducer'
import { useSelector, useDispatch } from 'react-redux'

const RecommendList = ({ image, id, artists, title, songUrl }) => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div className='recommend-list'>
        <Link to={`/`}>
          <img
            src={image}
            alt={title}
            onClick={() => {
              // dispatch(getMusicPlayId(id))
              // dispatch(displayAndPlayMusic(songUrl))
              dispatch(
                displayAndPlayMusic({
                  currentlyPlaying: songUrl,
                  musicPlayId: id,
                })
              )
            }}
          />
        </Link>
        <div className='details'>
          <div
            className='texts-container'
            onClick={() => dispatch(getMusicPlayId(id))}
          >
            <h5>{title}</h5>
            <p className='p-text'>{artists}</p>
          </div>
          {/* <FaPlay className='icon' /> */}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .recommend-list {
    height: 300px;
    width: 270px;
    background: var(--highlight);
    border-radius: 10px;
    margin-right: 1rem;
    padding: 1.5rem;
  }

  a > img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .details {
    height: 30%;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .texts-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .p-text {
    font-size: 0.8em;
    margin-top: 0.3rem;
  }

  .icon {
    cursor: pointer;
  }
`

export default RecommendList
