import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getLikedSongs } from '../../Features/eventReducer'
import LikeList from './LikeList'
import { Link, useNavigate } from 'react-router-dom'

const MainBody = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { likedIndexes, likedSongs } = useSelector((store) => store.eventSlice)

  useEffect(() => {
    dispatch(getLikedSongs())
  }, [likedIndexes])

  return (
    <Wrapper>
      <div className='main-songs-container'>
        <div className='details'>
          <h3>{likedSongs.length ? 'Songs' : 'No favourite song yet?'}</h3>
        </div>

        <div className='songs-list-container'>
          {likedSongs.length ? (
            likedSongs.map((value) => {
              return <LikeList {...value} key={value.id} />
            })
          ) : (
            <button type='button' onClick={() => navigate('/explore')}>
              ✨Explore World
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default MainBody

const Wrapper = styled.article`
  .main-songs-container {
    width: 100%;
    height: auto;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .details {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--white-color);
  }

  .songs-list-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  button {
    height: 50px;
    font-size: 0.8em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Varela Round', sans-serif;

    background: rgb(180, 113, 226);
    background: linear-gradient(
      90deg,
      rgba(180, 113, 226, 1) 0%,
      rgba(128, 193, 213, 1) 61%
    );
  }
`
