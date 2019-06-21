import { useLayoutEffect } from 'react'

export function useLockBodyScroll(toggled) {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    if (toggled) {
      document.body.style.overflow = 'hidden'
    }

    return () => (document.body.style.overflow = originalStyle)
  }, [toggled]) // Empty array ensures effect is only run on mount and unmount
}

export function useLockBodyScrollOnMount() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
