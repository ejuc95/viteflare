import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import useGetAll from '../../hooks/useGetAll'
import Card from '../../components/Card'
import ContainerGallery from '../../components/ContainerGallery'
import PageButtons from '../../components/PageButtons'
import Search from '../../components/Search'
const Home = () => {
  const [params, setParams] = useSearchParams()

  const queries = useMemo(() => {
    return Object.fromEntries([...params])
  }, [params])

  const { data, loading } = useGetAll({
    params: queries
  })

  const pagination = (value) => {
    setParams({
      ...queries,
      page: value
    })
  }

  const search = (value) => {
    setParams({
      ...queries,
      name: value
    })
  }

  return (
    <div className='p-4 w-full flex flex-col justify-start gap-4'>
      {loading && <p>Loading...</p>}
      <div className='w-full flex justify-center items-center'>
        <Search onChange={search} />
      </div>
      <div className='w-full flex justify-center items-center'>
        <PageButtons
          page={queries?.page || 1}
          total={data?.info?.pages || 1}
          setPage={pagination}
        />
      </div>
      <ContainerGallery>
        {data?.results && data.results.map(e =>
          <Card key={e.id} name={e.name} image={e.image} id={e.id} />
        )}
      </ContainerGallery>
    </div>
  )
}

export default Home
