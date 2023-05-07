import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/character'

const getAll = async (params) => {
  const { data } = await axios.get(baseUrl, {
    params
  })

  return data
}

const getOne = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}

export default {
  getAll,
  getOne
}
