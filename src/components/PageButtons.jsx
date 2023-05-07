import React from 'react'

const PageButtons = ({ total, page, setPage }) => {
  const handleClick = {
    prev: () => {
      if (Number(page) === 1) return
      setPage(Number(page) - 1)
    },
    next: () => {
      if (Number(page) === Number(total)) return
      setPage(Number(page) + 1)
    }
  }
  return (
    <div className='btn-group'>
      <button
        className='btn'
        onClick={handleClick.prev}
      >
        Prev
      </button>
      <button
        className='btn'
        onClick={handleClick.next}
      >
        Next
      </button>
    </div>
  )
}

export default PageButtons
