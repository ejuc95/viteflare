import React from 'react'
import { useParams } from 'react-router-dom'
import useGetOne from '../../hooks/useGetOne'
import Hero from '../../components/Hero'

const Character = () => {
  const { id } = useParams()
  const { data, loading } = useGetOne({
    id,
    skip: !id
  })

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.id && <Hero image={data.image} name={data.name} />}
    </div>
  )
}

export default Character
