import React from 'react'
import styled from 'styled-components'
import { LikeHeader, MainBody } from '../Components/Likes'

const Likes = () => {
  return (
    <Wrapper>
      <div className='like-page'>
        <LikeHeader />
        <MainBody />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .like-page {
    display: flex;
    flex-direction: column;
    background: var(--page-bg);
    color: var(--white-color);
    width: 100%;
    min-height: 100vh;
    padding-bottom: 8rem;
  }
`

export default Likes
