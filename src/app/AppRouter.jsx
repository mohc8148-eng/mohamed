import { useEffect, useState } from 'react'
import { resolveRoute } from '../routes/index.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import '../App.css'

function AppRouter() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const route = resolveRoute(pathname)

  return (
    <MainLayout>
      {route.element}
    </MainLayout>
  )
}

export default AppRouter
