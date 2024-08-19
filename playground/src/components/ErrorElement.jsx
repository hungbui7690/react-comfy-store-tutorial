import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h4 className='font-bold text-4xl'>there was an error... </h4>
      <div className='mt-10 '>
        <Link to='/' className='btn btn-secondary'>
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default ErrorElement
