import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import SongList from './SongList'

const Main = () => {
  const { musicList } = useSelector((store) => store.eventSlice)

  return (
    <Wrapper>
      <div className='main-songs-container'>
        <div className='details'>
          <h3>Popular Songs</h3>
        </div>
        <div className='songs-list-container'>
          {musicList.map((value) => {
            return <SongList {...value} key={value.id} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

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
`

export default Main
