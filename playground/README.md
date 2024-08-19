- Loader Params
```js
export const loader = async ({ request }) => {
  const params = new URL(request.url).searchParams.entries() // return Iterator
  console.log('params: ', params)
  const paramsList = Object.fromEntries([...params]) // convert to object
  console.log('paramsList: ', paramsList)

  const response = await customFetch(url, { paramsList })

  const products = response.data.data
  const meta = response.data.meta

  return { products, meta, params }
}
```