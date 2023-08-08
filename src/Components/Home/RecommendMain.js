import React from 'react'
import styled from 'styled-components'
import RecommendList from './RecommendList'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const RecommendMain = () => {
  const { recommendList } = useSelector((store) => store.eventSlice)
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div className='recommend-main'>
        <div className='recommend-details'>
          <h3>Recommended</h3>
          <p onClick={() => navigate('/explore')}>See all</p>
        </div>
        <div className='recommend-container'>
          {recommendList.map((value) => {
            return <RecommendList {...value} key={value.id} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .recommend-main {
    width: 100%;
    height: auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }

  .recommend-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--white-color);
  }

  p {
    opacity: 0.8;
    cursor: pointer;
    user-select: none;
  }

  .recommend-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    overflow: auto;
    white-space: nowrap;
    overflow-y: hidden;
    padding-bottom: 1rem;
    scroll-snap-type: mandatory;
    scroll-snap-type: x mandatory;
    scroll-snap-points-x: 70%;
    margin-top: 3rem;
  }
`

export default RecommendMain
