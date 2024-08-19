import { Hero } from '../components'
import { customFetch } from '../utils' // 1. axios custom instance

const url = '/products?featured=true'

// 2. loader must have "return"
export const loader = async () => {
  const response = await customFetch(url)
  console.log(response)
  const products = response.data.data

  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  )
}
export default Landing
