import { useEffect, useState } from 'react'

import { getFreelance } from './contentful'

const projectList = getFreelance()

export default function useFreelance() {
  const [freelance, setFreelance] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    projectList.then(projects => {
      setFreelance(projects)
      setLoading(false)
    })
  }, [])

  return [freelance, loading]
}