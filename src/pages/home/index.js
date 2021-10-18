import React, { useEffect, useRef } from 'react'

import CustomButton from '../../components/customButton'
import DownArrow from '../../svg-components/down-arrow'
import Photo from '../../assets/images/IMG_7513.png'

import './home.scss'

const Home = ({ setHome, handleScroll, work }) => {
  const ref = useRef()

  useEffect(() => {
    setHome(ref)
  }, [setHome])

  return (
    <div className='home' ref={ref}>
      <div>
        <img alt='me' src={Photo} />
        <p>I am self taught software engineer with a love of simple, useful, and beautiful experiences. I believe original perspectives lead to innovation.
        I built my first website on GeoCities with HTML and plenty of animated GIFs some time around '94. Now some of the tools I like to work with include React, Python, Go, Postgres, and Docker, among others.
        </p>
      </div>
      <CustomButton onClick={() => handleScroll(work)} className='custom-button'>
        <DownArrow className='down-arrow' fill='#ff00ff4c' />
      </CustomButton>
    </div>
  )
}

export default Home

