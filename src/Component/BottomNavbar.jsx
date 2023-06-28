import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <div>
          <div className='container' style={{display:"flex", width:"100%", height:"50px",backgroundColor:"teal", color:"white", fontSize:'24px', alignItems:"center",marginTop:"10px"}}>
            <div className="left" style={{ width:"10%", fontSize:"24px" }}></div>
            <div className="right" style={{display:"flex",width:"90%", justifyContent:"space-around", color:'white'}}>
                <div style={{color:"white"}}>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/search">
                        Search
                    </Link>
                </div>
                <div>
                    <Link to="/movies">
                        Movies
                    </Link>
                </div>
            </div>
          </div>
    </div>
  )
}

export default BottomNavbar