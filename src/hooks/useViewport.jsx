import { useState, useEffect } from 'react'

export default function useViewport() {
  const [viewport, setViewport] = useState(null)

  function handleViewportChange() {
    const vp = window.innerWidth;
    console.log(vp);
    if (vp < 600) {
      setViewport('DEFAULT')
    } else if (vp < 1024) {
      setViewport('MEDIUM')
    } else if (vp < 1200) {
      setViewport('LARGE')
    } else {
      setViewport('MAXWIDTH')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleViewportChange()
      window.addEventListener('resize', handleViewportChange, false)
    }
    return function cleanup() {
      window.removeEventListener('resize', handleViewportChange, false)
    }
  })

  return viewport
}
