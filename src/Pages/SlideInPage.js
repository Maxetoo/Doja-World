import React from 'react'
import styled from 'styled-components'

const SlideInPage = () => {
  return (
    <Wrapper className='slide-page-main'>
      <div className='slide-page'></div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .slide-page {
    height: 100%;
    width: 100%;
  }
`

export default SlideInPage
