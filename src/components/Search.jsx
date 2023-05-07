import React from 'react'

let timer = null
const Search = ({ onChange, defaultValue = '' }) => {
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
      defaultValue={defaultValue}
      className='input input-bordered input-primary w-full max-w-xs'
      onChange={handleChange}
    />
  )
}

export default Search
