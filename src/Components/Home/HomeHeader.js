import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { DojaFirst } from '../../Assets'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { musicData } from '../../Data/data'
import {
  getMusicPlayId,
  displayAndPlayMusic,
} from '../../Features/eventReducer'
const HomeHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { songUrl, id } = musicData[0]

  return (
    <Wrapper>
      <div className='home-header'>
        <div className='header-details'>
          <div className='image-container'>
            <img
              src={DojaFirst}
              alt='potrait of Doja cat'
              onClick={() => navigate('/about')}
            />
          </div>
          <h3>Home</h3>
          <div className='icon'>{/* <FiSearch /> */}</div>
        </div>
        <div className='intro-container'>
          <h2>Listen to the best of Doja Cat</h2>
          <Link to={`/`}>
            <button
              type='button'
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
            >
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .home-header {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  .header-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .image-container {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .icon {
    font-size: 1.2em;
    cursor: pointer;
  }

  .intro-container {
    width: 95%;
    height: 200px;
    border-radius: 10px;
    // background: #75809e;
    background: var(--highlight);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
  }

  h2 {
    width: 70%;
    text-align: start;
    font-size: 1.3em;
  }

  a > button {
    background: var(--btn-color);
    border: none;
    border-radius: 10px;
    font-family: 'Varela Round', sans-serif;
    cursor: pointer;
    height: 50px;
    width: 100px;
  }
`

export default HomeHeader
