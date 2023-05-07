import React from 'react'

let timer = null
const Search = ({ onChange }) => {
  const handleChange = (e) => {
    const name = e.target.value
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      onChange(name)
    }, 300)
  }
  return (
    <input
      type='text'
      placeholder='Search'
      className='input input-bordered input-primary w-full max-w-xs'
      onChange={handleChange}
    />
  )
}

export default Search
