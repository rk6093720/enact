import React, { useEffect, useState } from 'react'

const Carousel = () => {
    // console.log(CarouselImage.image);
    const [count,setCount]= useState(0);

    const handlenext=()=>{
        if(count === CarouselImage.length -1){
            setCount(-1)
        }
    setCount((next)=> next + 1)
    }
    const handleprev=()=>{
        if(count ===0 ){
            setCount(6)
        }
        setCount((prev)=> prev  - 1)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(count === CarouselImage.length-1){
                setCount(-1)
            }
            setCount((prev)=> prev + 1)
        },2500)
        return ()=>{
            clearInterval(interval)
        };
    });
  return (
    <div>
         <div className="image"style={{width:"100%", height:"740px"}}>
              <img style={{width:"98%", height:"100%",margin:"auto", marginTop:"5px",borderRadius:"2%"}} src={CarouselImage[count].image} alt="img" />
            </div>
        <div className="button" style={{ width:"100%", height:"50px",fontSize:"24px", alignItems:"center",margin:"auto"}}>
            <button style={{width:"50px",height:"50px", fontSize:"44px",backgroundColor:"red", color:"white",marginTop:"5px",borderRadius:"15px"}} onClick={handleprev} disabled={ count === 0}>{"<"}</button>
            <button style={{width:"50px",height:"50px",fontSize:"44px",backgroundColor:"blue", color:"white",marginLeft:"5px",borderRadius:"15px"}} onClick={handlenext} disabled={count === CarouselImage.length-1}>{">"}</button>
         </div>
    </div>
  )
}

export default Carousel;
const CarouselImage=[
    {
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6125/1416125-i-82993f6512c4",
    },
    {
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8643/1538643-i-57fb3087cd94"
    },
    {
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3232/1423232-i-050f622bde39",
    },
    {
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5346/1525346-i-e6648a1e3134",
    },
    {
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3132/1383132-i-011cefc50da9",
    },
    {
        "image":"https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/354/1440354-i-7562a3e85ffc"
    },
 
]