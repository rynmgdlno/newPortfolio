const client = require('contentful').createClient({
  space: 'ojl4gjuc79vd',
  accessToken: '6dPU0i9X-aStr6ULIDJvi_VU7fishPuxxG7xvT_dpZs'
})

export const getElement = async (elementID) => {
  const element = await client.getEntry(elementID)
  return element
}

export const getProjects = async () => {
  const eventsObj = await client.getEntries({ content_type: 'project'})
  const events = eventsObj.items
  return events
}


