import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form  className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
            autoFocus
            id='search'
            type="text"
            role='searchBox'
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem