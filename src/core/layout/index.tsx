import { Suspense, lazy } from 'react'
import Header from './Header'
import Container from './Container'
import { BrowserRouter } from 'react-router-dom'
import Spinner from 'core/components/common/Spinner'
export const Layout = () => {
  const Footer = lazy(() => import('./Footer'))
  return (
    <BrowserRouter>
      <header className="header">
        <div className="px-16 py-5 mx-auto header-container">
          <Header />
        </div>
      </header>
      <Suspense
        fallback={
          <div className="mt-12 flex justify-center">
            <Spinner />
          </div>
        }
      >
        <div>
          <Container />
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}
