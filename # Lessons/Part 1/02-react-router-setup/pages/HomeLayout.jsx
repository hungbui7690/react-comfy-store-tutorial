import { Outlet } from 'react-router-dom'

// 4.
const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <Outlet />
    </>
  )
}
export default HomeLayout
