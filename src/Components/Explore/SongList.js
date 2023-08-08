import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TbDotsVertical } from 'react-icons/tb'
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineCompass,
  AiFillCompass,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getMusicPlayId,
  displayAndPlayMusic,
  addToLikes,
} from '../../Features/eventReducer'
// import { addToLikes } from '../../Features/effectReducer'
// TbDotsVertical
const SongList = ({ image, artists, title, id, songUrl }) => {
  const [isLiked, setIsLiked] = useState(false)
  const dispatch = useDispatch()
  const { likedIndexes } = useSelector((store) => store.eventSlice)

  return (
    <Wrapper>
      <div className='song-list'>
        <div
          className='image-desc'
          onClick={() => {
            dispatch(getMusicPlayId(id))
            dispatch(displayAndPlayMusic(songUrl))
          }}
        >
          <img src={image} alt={title} />
          <div className='song-desc'>
            <h4>{title}</h4>
            <p>{artists}</p>
          </div>
        </div>
        <AiFillHeart
          onClick={() => dispatch(addToLikes(id))}
          className='icon'
          color={likedIndexes.find((val) => +val === +id) ? '#e23721' : '#ffff'}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .song-list {
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .image-desc {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  img {
    width: 70px;
    height: 100%;
    border-radius: 10px;
  }

  .song-desc {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 2rem;
  }

  p {
    opacity: 0.8;
    font-size: 0.8em;
  }

  .icon {
    cursor: pointer;
    user-select: none;
    transition: 0.7 all;
  }
`

export default SongList
