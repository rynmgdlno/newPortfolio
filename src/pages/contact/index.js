import React, { useEffect, useRef } from 'react'

import ContactIcon from '../../svg-components/contact-icon'
import GitHubIcon from '../../svg-components/github-icon'
import LinkedInIcon from '../../svg-components/linkedin-icon'
import EmailIcon from '../../svg-components/email-icon'

import './contact.scss'
import '../sections.scss'

const Contact = ({ setContact }) => {
  const ref = useRef()

  useEffect(() => {
    setContact(ref)
  }, [setContact])

  return (
    <div className='contact sections' ref={ref}>
      <div className='section-header'>
        <ContactIcon className='section-icon' />
        <h1>Contact</h1>
      </div>
      <p className='contact-text'>I'm always looking for interesting clients to work with or exciting projects to collaborate on, shoot me an email or get in touch via the socials!
      </p>
      <div className='icon-container'>
        <a target='blank' href="mailto:info@ryanmagdaleno.com">
          <EmailIcon className='email' />
        </a>
        <a target='blank' href="https://github.com/rynmgdlno">
          <GitHubIcon className='github' fill='#fff' />
        </a>
        <a target='blank' href="https://www.linkedin.com/in/ryan-magdaleno-a96667139/">
          <LinkedInIcon className='linkedin' fill='#fff' />
        </a>
      </div>
    </div>
  )
}

export default Contact