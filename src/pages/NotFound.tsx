import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="bg-c-background">
      <div className="flex min-h-screen items-center justify-center px-2">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="mt-4 text-2xl font-medium">Oops! Page not found</p>
          <p className="mb-8 mt-4">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/"
            aria-label="Back to homepage"
            className="rounded-full bg-c-primary px-6 py-3 font-bold text-c-background transition duration-300 ease-in-out hover:bg-c-secondary hover:text-c-text"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
