import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { latestmovies } from '../Redux/action';

const Movies = () => {
  const movies = useSelector((state)=> state.movie);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    
    dispatch(latestmovies())
 },[dispatch])
 let filterdata = movies.filter((item)=>{
  return   item.imdb_title_id !== '' ? "true" :"not found"
    
 })
 console.log(...filterdata);

 console.log(movies);
  return (
    <>
      <div style={{width:"100%", height:"100%", border:"1px solid red"}}>
        <h1>Movies</h1>
        
        <div style={{width:"100%",height:"100%",display:"grid", gridTemplateColumns:"repeat(4,350px)", gridGap:"10px", margin:"auto"}}>
          {
                  movies.length > 0 && movies.map((item)=>{
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
    </>
  )
}

export default Movies