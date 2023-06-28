import React, { useEffect, useState } from 'react'
import Carousel from '../Component/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, getmovie, increament } from '../Redux/action';

const Home = () => {
const movie = useSelector((state)=> state.lastestmovie);
const counter = useSelector((state)=> state.count);

// const [count,setCount]= useState(0);
const dispatch = useDispatch();
const handlenext=()=>{
  if(counter === movie.length -1){
    dispatch(increament())
  }

    dispatch(increament())
  
  
}
const handleprev =()=>{
  if(counter === 0){
    dispatch(decrement());
  }
  
    dispatch(decrement())
}
console.log(movie);
useEffect(()=>{
  if(movie.length === 0)
  {
    dispatch(getmovie())
  }
  
},[dispatch, movie.length]);
let moviec = movie.slice(counter , counter + 5)
console.log(movie);
   console.log(counter);
  return (
    <div>
        <Carousel/>
        {/* secondpart */}
        <div className="latestmovies" style={{width:"100%", height:'600px',border:"1px solid black", marginTop:"15px"}}>
          <h1 style={{textAlign:'start'}}>LatestMovies:</h1>
          <div className="carouselbutton" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
            <div className="leftbutton" >
              <button style={{textAlign:"center", height:"100%", fontSize:"50px"}} disabled={counter === 0} onClick={handleprev}>{"<"}</button>
            </div>
              <div style={{display:'flex', width:"100%"}}>
               {
                moviec.length > 0 && moviec.map((item)=>{
                  return <div key={item.id } style={{ width:"100%",height:"100%",marginLeft:"5px"}}>
                    <div style={{width:"100%", height:"100%"}}>
                      <img style={{width:"100%", height:"100%"}} src={item.image} alt="" />
                    </div>
                    </div>
                })
               }
              </div>
            <div className="rightbutton" style={{border:"1px solid black"}}>
              <button style={{textAlign:"center", height:"100%", fontSize:"50px"}} disabled={counter === moviec.length -1} onClick={handlenext}>{">"}</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
