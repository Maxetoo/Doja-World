import React from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const AboutDoja = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div className='about-header'>
        <BiChevronLeft onClick={() => navigate('/')} className='icon' />
        <h3>About Doja Cat</h3>
        <p></p>
      </div>
      <div className='about-details'>
        <img
          src='https://iglives.tv/wp-content/uploads/2019/11/dojacat_nov11.jpg'
          alt='doja cat'
        />
        <p>
          Amala Ratna Zandile Dlamini (born on October 21, 1995 in Calabasas,
          California), better known by her stage name Doja Cat, is a rapper,
          singer, songwriter, producer and dancer. Her stage name is derived
          from the slang word “doja,“ which refers to marijuana, and her love of
          cats. Uploading many songs on her SoundCloud, she has been active
          since 2013, when she was discovered by Dr. Luke. She is signed to
          Kemosabe Records, Dr. Luke’s own Sony Music imprint.
        </p>
        <a href='https://en.wikipedia.org/wiki/Doja_Cat'>
          <p className='link'>Check for more info</p>
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--page-bg);
  color: var(--white-color);
  width: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 10000;
  top: 0;
  transition: 0.5 ease-out;
  padding: 1.5rem;
  overflow: hidden;

  .about-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .icon {
    font-size: 2em;
    cursor: pointer;
    user-select: none;
  }

  .about-details {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  img {
    height: 300px;
    width: 100%;
    background: #f5f5f5;
    object-fit: cover;
    border-radius: 5px;
  }

  p {
    margin-top: 1rem;
    opacity: 0.8;
  }

  a {
    color: var(--white-color);
    text-decoration: underline;
  }
`
export default AboutDoja
