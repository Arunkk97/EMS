import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate('/home')
  }
  return (
    <>
    <div className='container'>
        <div className="row ">
            <div className="col-lg-6">
               <div className='mt-5'> 
                <h2 style={{fontSize:'35px'}} className='fw-bolder text-warning mb-3 py-3'>Employee <br /> Management <br /> System</h2>
                <p className='mt-3'>Employee management system is an application based system, having two applications developed, one for employers to manage employee details and another for employees to mark their attendance. Every organisation whether government or private uses an information system to store data of their staff.  </p>
                
                <button onClick={handleNavigate} className='btn btn-dark mt-4 mb-5'>Get Started</button>
                
                </div>
            </div>
            <div className="col-lg-6 mt-5 d-flex justify-content-center align-items-center">
                <img  className='w-100' src="https://i.pinimg.com/originals/e7/78/2b/e7782b954b20ab768c74fc1dfd6f9377.gif" alt="" />
            </div>
        </div>

    </div>
    </>
  )
}

export default LandingPage