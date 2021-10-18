import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import smoothscroll from 'smoothscroll-polyfill'
import { useMediaPredicate } from 'react-media-hook'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import CustomButton from '../customButton'
import Header from '../header'
import Logo from '../../svg-components/logo'
import Main from '../main'
import Menu from '../menu'
import RotateIcon from '../../svg-components/rotate-icon'

import Contact from '../../pages/contact'
import Home from '../../pages/home'
import Work from '../../pages/work'

import './container.scss'

smoothscroll.polyfill()

const Container = () => {
  const { width, height } = useWindowDimensions()
  const [burgerSize, setBurger] = useState(20)
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaPredicate('(max-width: 768px)')
  const scrollRef = useRef()


  const [home, setHome] = useState()
  const [work, setWork] = useState()
  const [contact, setContact] = useState()

  const mainStyle = {
    height: height
  }

  const handleScroll = (page) => {
    page.current.scrollIntoView({ behavior: 'smooth' })
  }

  // dynamic menu button sizing:
  useEffect(() => {
    if (width < 375) {
      setBurger(15)
    } else if (width < 500) {
      setBurger(20)
    }
    if (width > 769) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [width])

  // useEffect(() => {
  //   const element = scrollRef.current
  //   const snapElement = new ScrollSnap(element, {
  //     snapDestinationX: '100vw',
  //     timeout: 10,
  //     duration: 230,
  //     threshold: .2,
  //     easing: EasingFunctions.easeInOutQuad
  //   })
  //   snapElement.bind()
  // })

  return (
    <div className='main-container' style={mainStyle}>
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        width={width}
        burgerSize={burgerSize}
        home={home}
      >
        <Logo onClick={() => handleScroll(home)} className='logo' />
        <h1 onClick={() => handleScroll(home)} className='title'>R Y A N   M A G D A L E N O</h1>
        {
          isMobile ?
            <CSSTransition
              in={isOpen}
              timeout={3000}
              classNames='menu-transitions'
              unmountOnExit
            >
              <Menu>
                <CustomButton
                  onClick={() => {
                    handleScroll(work)
                    setOpen(false)
                  }}
                  className='custom-button menu-button'>
                  <span>W O R K</span>
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    handleScroll(contact)
                    setOpen(false)
                  }}
                  className='custom-button menu-button'>
                  <span>C O N T A C T</span>
                </CustomButton>
              </Menu>
            </CSSTransition>
            :
            <Menu>
              <CustomButton
                onClick={() => {
                  handleScroll(work)
                  setOpen(false)
                }}
                className='custom-button menu-button'>
                <span>W O R K</span>
              </CustomButton>
              {/* <CustomButton
                onClick={() => handleScroll(blog)}
                className='custom-button menu-button'>
                <span>B L O G</span>
              </CustomButton> */}
              <CustomButton
                onClick={() => {
                  handleScroll(contact)
                  setOpen(false)
                }}
                className='custom-button menu-button'>
                <span>C O N T A C T</span>
              </CustomButton>
            </Menu>
        }
      </Header>
      <div className='page-container'>
        <Main
          ref={scrollRef}>
          <Home setHome={setHome} handleScroll={handleScroll} work={work} />
          <Work setWork={setWork} />
          <Contact setContact={setContact} />
        </Main>
        <div className='shadow'></div>
        <div className='shadow2'></div>
      </div>
      {
        width > height && width < 820 &&
        <div className='rotate'>
          <RotateIcon className='rotate-icon' />
          <p>Please rotate your device for the best viewing experience!</p>
        </div>
      }
      <p className='copy'>© Ryan Magdaleno 2021</p>
    </div>
  )
}

export default Container