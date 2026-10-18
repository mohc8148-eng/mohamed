import HomePage from '../pages/HomePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import Page2 from '../pages/Page2.jsx'

// أضيفي كل صفحة جديدة هنا مع مسارها.
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/page2', element: <Page2 /> },
  { path: '/signup', element: <Page2 initialMode="signup" /> },
]

export function resolveRoute(pathname) {
  const normalizedPath = pathname.length > 1
    ? pathname.replace(/\/+$/, '')
    : pathname

  return routes.find((route) => route.path === normalizedPath) ?? {
    path: '*',
    element: <NotFoundPage />,
  }
}
