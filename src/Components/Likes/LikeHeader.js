import React from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'
import { DojaStars, DojaKissmeMore } from '../../Assets'
import { FaPlay, FaPause } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getMusicPlayId,
  displayAndPlayMusic,
} from '../../Features/eventReducer'
// BiChevronLeft

const LikeHeader = () => {
  const { likedSongs } = useSelector((store) => store.eventSlice)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { id, songUrl } = likedSongs[0] || []

  return (
    <Wrapper>
      <div className='header-section'>
        <div className='header-img-container'>
          <Link to='/'>
            <div className='icon'>
              <BiChevronLeft />
            </div>
          </Link>

          <div className='image-container'>
            <img src={DojaKissmeMore} alt='kiss me more cover' />
          </div>
        </div>
        <div className='song-details'>
          <div className='details'>
            <p></p>
            <h3>Your Likes</h3>
            <p className='melody'>Explore your favourite Doja cat's songs</p>
          </div>
          <div
            className='song-icon'
            onClick={() => {
              if (likedSongs.length !== 0) {
                dispatch(getMusicPlayId(id))
                dispatch(displayAndPlayMusic(songUrl))
              }
            }}
          >
            <FaPlay />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .header-section {
    width: 100%;
    height: 300px;
    padding: 2rem;
    background: var(--highlight);
  }

  .header-img-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  a > .icon {
    font-size: 2em;
    color: var(--white-color);
    cursor: pointer;
  }

  img {
    width: 50%;
    height: 100%;
    border-radius: 10px;
    background: black;
    margin-top: -2rem;
  }

  .song-details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  p {
    opacity: 0.8;
  }

  h3 {
    margin-top: 0.1rem;
    font-size: 2em;
  }

  .melody {
    font-size: 0.8em;
    margin-top: 0.5rem;
  }

  .song-icon {
    background: var(--btn-color);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;
    z-index: 10;
  }
`

export default LikeHeader
