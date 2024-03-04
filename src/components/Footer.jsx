import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className=' m-5 row align-items-center '>
     <Link to={'/'} style={{textDecoration:'none'}}>
        <div className="col-lg-3 ">
          <h4 className='text-warning fw-bolder py-3'>EMS</h4>
        </div>
     </Link>
      <div className="col-lg-6"></div>
      <div className="col-lg-3"></div>

    </div>
    
    </>
  )
}

export default Footer