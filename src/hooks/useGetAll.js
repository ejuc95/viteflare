import { useEffect, useState } from 'react'
import api from '../services/api'

const useGetAll = ({
  params,
  skip
} = {
  params: { page: 1 },
  skip: false
}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const characters = await api.getAll(params)
      setData(characters)
    } catch (error) {
      console.log(error)
      setError('error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (skip) return
    setLoading(true)
    fetchData()
  }, [params])

  return {
    data,
    loading,
    error
  }
}

export default useGetAll
