import { useState, useEffect } from 'react'
import api from '../services/api'

const useGetOne = ({ id, skip = false }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const character = await api.getOne(id)
      setData(character)
    } catch (error) {
      console.log(error)
      setError('Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (skip) return
    setLoading(true)
    fetchData()
  }, [])

  return {
    data,
    loading,
    error
  }
}

export default useGetOne
