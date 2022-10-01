import { useState, useEffect } from 'react'

const calculateViewportDistance = (positionY: number): Boolean => {
  if (positionY > 100) return true
  return false
}

const useWindowsPosition = (): Boolean => {
  const [shadowNavbar, setShadowNavbar] = useState<Boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShadowNavbar(calculateViewportDistance(window.scrollY))
    })

    return () => {
      removeEventListener('scroll', () => {
        setShadowNavbar(calculateViewportDistance(window.scrollY))
      })
    }
  }, [])

  return shadowNavbar
}

export default useWindowsPosition
