import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToTop = () => {
      // Ensures scroll happens after the new content is painted
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" })
      })
    }

    scrollToTop()
  }, [pathname])

  return null
}

export default ScrollToTop
