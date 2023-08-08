import React from 'react'
import styled from 'styled-components'
import { HomeHeader, RecommendSection } from '../Components/Home'

const Home = () => {
  return (
    <Wrapper>
      <div className='home-page'>
        <HomeHeader />
        <RecommendSection />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .home-page {
    display: flex;
    flex-direction: column;
    background: var(--page-bg);
    color: var(--white-color);
    width: 100%;
    min-height: 100vh;
    padding: 1.5rem;
    padding-bottom: 8rem;
  }
`

export default Home
