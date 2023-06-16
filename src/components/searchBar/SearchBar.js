import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { useSearchParams } from 'react-router-dom'
import Search from './Search'


// async function getUser(){
//   const res = await fetch("http://localhost:3000/?q=[search query]")
  
// }

const SearchBar = () => {
  const [search, setSearch] = useState([])
  const [searchParam, setSearchParam] = useSearchParams()
  
  
  useEffect(() => {
    axios.get('http://localhost:3000/?q=[search query]')
    .then(res => setSearch(res)) 
  }, [])

const searchInputChangeListener = (e) =>{
  let q = e.target.value
  setSearchParam({q})
}
  return (
    <div>

    
   <input value={searchParam.get('q')} onChange={searchInputChangeListener}/>

    {search.filter(quantry => {
      let q = searchParam.get("q")
      let name = quantry.name.toLowerCase()
      return name.startsWith(q.toLowerCase())
    }).map((item)=>{
      return <Search name={item.name}/>
    })}

    {/* <input type="text" onChange={(e)=> setSearchParam(e.target.value)}/>
    {search.filter((item)=>{
      if(searchParam === ""){
        return item
      }
      else if (item.name.toLowerCase().includes(searchParam.toLowerCase())){
        return item
      }
    })} */}
    </div>
  )

  }
export default SearchBar