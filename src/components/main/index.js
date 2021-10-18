import React, { forwardRef } from 'react'

import './main.scss'

const Main = forwardRef((props, ref) => (
  <div className='main sections' ref={ref}>
    {props.children}
  </div>
))

export default Main