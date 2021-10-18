import { useEffect, useState } from 'react'

import { getProjects } from './contentful'

const projectList = getProjects()

export default function useFreelance() {
  const [projects, setProjects] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    projectList.then(projects => {
      setProjects(projects)
      setLoading(false)
    })
  }, [])

  return [projects, isLoading]
}