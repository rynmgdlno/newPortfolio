import React from 'react'

import './project-card.scss'

import CustomButton from '../customButton'

const ProjectCard = ({ project }) => {

  const {
    description,
    link,
    photo,
    shortDescription,
    title,
    video
  } = project.fields

  const photoLink = photo && `https:${photo.fields.file.url}`
  const videoLink = video && `https:${video.fields.file.url}`

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className='project-container'>
        {
          video ?
            <video loop controls={false} autoPlay={true} width='100%'>
              <source src={videoLink} />
            </video> :
            <img alt='' src={photoLink} />
        }
        <div className='description-container'>
          <h4>{shortDescription}</h4>
          <p>{description}</p>
          {
            link &&
            <CustomButton className='custom-button visit-button'>
              <a href={`https://${link}`}>V I S I T</a>
            </CustomButton>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard