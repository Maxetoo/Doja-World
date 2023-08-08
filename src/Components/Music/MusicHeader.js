import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'
import { TbDotsVertical } from 'react-icons/tb'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideMusicPage } from '../../Features/eventReducer'
const Header = () => {
  const { musicList, musicPlayId, currentlyPlaying, showMusicPage } =
    useSelector((store) => store.eventSlice)
  const [musicItem, setMusicItem] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getSongDetails = musicList.find((value) => value.id === +musicPlayId)
    setMusicItem(getSongDetails)
  }, [musicPlayId])

  const { image, title, recommended } = musicItem || []

  return (
    <>
      <Wrapper>
        <div className='music-header'>
          <div className='header-details'>
            <Link to='/'>
              <BiChevronLeft
                className='icon'
                onClick={() => dispatch(hideMusicPage())}
              />
            </Link>
            <h3>{recommended ? 'Recommended' : 'Song'}</h3>
            {/* <TbDotsVertical className='icon' /> */}
            <p></p>
          </div>
          <div className='image-container'>
            <img src={image} alt={title} />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  .music-header {
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

  a {
    color: var(--white-color);
  }

  a > .icon {
    font-size: 1.5em;
    cursor: pointer;
    user-select: none;
  }

  .icon {
    font-size: 1.5em;
    cursor: pointer;
    user-select: none;
  }

  .image-container {
    margin-top: 3rem;
    width: 80%;
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
  }
`

export default Header
