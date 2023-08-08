import React from 'react'
import styled from 'styled-components'
import { MusicHeader, MusicBody, BgMusicPlay } from '../Components/Music'
import { useSelector, useDispatch } from 'react-redux'

const Music = () => {
  const { currentlyPlaying, showMusicPage } = useSelector(
    (store) => store.eventSlice
  )

  return (
    <Wrapper>
      <div
        className={`${
          currentlyPlaying && showMusicPage ? 'music-section' : 'min-size'
        }`}
      >
        <MusicHeader />
        <MusicBody />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .music-section {
    display: flex;
    flex-direction: column;
    background: var(--page-bg);
    color: var(--white-color);
    width: 100%;
    min-height: 100vh;
    padding: 1.5rem;
    position: fixed;
    z-index: 200;
    top: 0;
    padding-bottom: 5rem;
    transition: 0.5 ease-out;
  }
  .min-size {
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
    margin-bottom: 5rem;
    display: none;
    overflow: none;
  }
`

export default Music
