import React from 'react'

import Hamburger from 'hamburger-react'

import './header.scss'

const Header = (props) => {
  
  const burgerClass = props.isOpen ? 'hamburger-container open' : 'hamburger-container'

  return (
    <div className='header-container'>
      <div className='header'>
        {props.children}
        {
          props.width < 769 &&
          <div className={burgerClass}>
            <Hamburger
              size={props.burgerSize}
              toggled={props.isOpen}
              toggle={props.setOpen}
            />
          </div>
        }
      </div>
      <div className='header-border'/>
    </div>
  )
}

export default Header