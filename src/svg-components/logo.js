import React from 'react'

const Logo = ({ className, onClick }) => {
  return (
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.6 78.47">
      <title>tesseract2</title>
      <polygon points="37.9 15.88 37.9 0 67.99 17.42 54.2 25.32 37.9 15.88" />
      <polygon points="18.9 48.68 18.9 32.8 32.7 40.78 32.7 56.66 18.9 48.68" />
      <polygon points="37.9 40.69 51.7 32.7 51.7 48.58 37.9 56.65 37.9 40.69" />
      <polygon points="21.51 28.32 35.3 20.34 49.09 28.32 35.3 36.23 21.51 28.32" />
      <polygon points="2.61 17.42 32.7 0 32.7 15.88 16.39 25.32 2.61 17.42" />
      <polygon points="0 21.8 13.8 29.78 13.8 48.68 0 56.66 0 21.8" />
      <polygon points="2.6 61.03 16.3 53.14 32.7 62.59 32.7 78.46 2.6 61.03" />
      <polygon points="37.9 62.59 54.3 53.14 68.1 61.13 37.9 78.47 37.9 62.59" />
      <polygon points="56.8 48.67 56.8 29.78 70.6 21.8 70.6 56.58 56.8 48.67" />
    </svg>
  )
}

export default Logo