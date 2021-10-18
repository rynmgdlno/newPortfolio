import { useEffect, useState } from 'react'

import { getPersonal } from './contentful'

const projectList = getPersonal()

export default function usePersonal() {
  const [personal, setPersonal] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    projectList.then(projects => {
      setPersonal(projects)
      setLoading(false)
    })
  }, [])

  return [personal, loading]
}