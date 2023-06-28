import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  searchMovie, searchText } from '../Redux/action';

const Search = () => {
  const searchmovie = useSelector((state)=> state.movie)
  const dispatch = useDispatch();
  const text=useSelector((state)=> state.text)
  console.log(text);
  //  const handleReset=()=>{
       
  //   }
    
    const handleChange=(e)=>{
       dispatch(searchText(e.target.value));
    }
   const handleSearch=(e)=>{
         e.preventDefault();
         dispatch(searchMovie(text))
    }
  return (
    <div>
        <div>
        <form onSubmit={handleSearch}>
          <input    type="text"
          placeholder='enter your movie'
          onChange={handleChange}
            />
            <button type='submit'>Search</button>
            {/* <button onClick={handleReset} >Reset</button> */}
        </form>
           </div>
           <div className="displaydata" style={{ width:"100%",height:"100%",display:"grid", gridTemplateColumns:"repeat(4,350px)", gridGap:"10px", margin:"auto"}}>
            {
              searchmovie.length > 0 && searchmovie.map((item)=>{
                return <div key={item.imdb_title_id} style={{marginLeft:"5px",margin:"auto", width:"100%",height:"100%", border:"1px solid black"}}>
                  <div>{item.title}</div>
                  <div>{item.year}</div>
                      <div>{item.country}</div>
                      <div>{item.description}</div>
                      <div>{item.date_published}</div>
                      <div>{item.language}</div>
                      <div>{item.writer}</div>

                </div>
              })
            }
           </div>
    </div>
  )
}

export default Search