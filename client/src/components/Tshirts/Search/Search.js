import React from 'react'
import "./Search.css"

function SearchteamName({setSearchteamName}) {
    return (
        <div>
        <div className='search-container'> 
           <input  type='text'
          placeholder='Type teamName to search'
          onChange={(e)=>setSearchteamName(e.target.value)}/> 

        </div>
        </div>
    )
}

export default SearchteamName;