import React, { useEffect, useRef } from 'react'

import useProjects from '../../apis/contentful/useProjects'

// import Portfolio from '../../components/portfolio/portfolio'
// import CustomButton from '../../components/custom-button/custom-button'
import ProjectCard from '../../components/projectCard'
import WorkIcon from '../../svg-components/work-icon'
// import Spinner from '../../components/spinner/spinner'

import './work.scss'
import '../sections.scss'

const Work = ({ setWork }) => {
  const [projects, isLoading] = useProjects()

  const ref = useRef()

  useEffect(() => {
    setWork(ref)
  }, [setWork])

  return (
    <div className="work sections" ref={ref}>
      <div className="section-header">
        <WorkIcon className='section-icon' />
        <h1>Work</h1>
      </div>
      {
        isLoading ?
          <p>Loading...</p> :
          <div className='projects'>
            {
              projects && projects.map(((project, i) => {
                return (
                  <ProjectCard project={project} key={i} />
                )
              }))
            }
          </div>
      }
    </div>
  )
}

export default Work