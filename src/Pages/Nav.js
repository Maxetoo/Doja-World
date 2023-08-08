import React, { useEffect } from 'react'
import styled from 'styled-components'
import { routeLinks } from '../Data/links'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNav } from '../Features/eventReducer'

const Nav = () => {
  const dispatch = useDispatch()
  const location = useLocation().pathname
  useEffect(() => {
    console.log(location)
  }, [])

  return (
    <Wrapper>
      <div className='nav-section'>
        <ul>
          {routeLinks.map((value) => {
            const { id, link, icon, activeIcon } = value
            return (
              <li key={id}>
                <Link
                  to={link}
                  className={`${location === link ? 'active-btn' : null}`}
                >
                  {location === link ? activeIcon : icon}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .nav-section {
    width: 100%;
    height: 80px;
    background: var(--page-bg);
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 50;
    padding: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    border: solid 1px var(--white-smoke);
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  a {
    color: var(--white-color);
    opacity: 0.8;
    font-size: 1.7em;
  }

  .active-btn {
    color: var(--btn-color);
    transition: 0.5s all;
  }
`

export default Nav
