import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/home')
  }
  return (
    <>
      <div className='container'>
        <div className="row ">
          <div className="col-lg-6">
            <div className='mt-5'>
              <h2 style={{ fontSize: '35px' }} className='fw-bolder text-warning mb-3 py-3'>Employee <br /> Management <br /> System</h2>
              <p className='mt-3'>Employee management system is an application based system, having two applications developed, one for employers to manage employee details and another for employees to mark their attendance. Every organisation whether government or private uses an information system to store data of their staff.  </p>

              <button onClick={handleNavigate} className='btn btn-dark mt-4 mb-5'>Get Started</button>

            </div>
          </div>
          <div className="col-lg-6 mt-5 d-flex justify-content-center align-items-center">
            <img className='w-100' src="https://i.pinimg.com/originals/e7/78/2b/e7782b954b20ab768c74fc1dfd6f9377.gif" alt="" />
          </div>
        </div>

        <h3 className='text-center mt-5 py-2 fw-bolder mb-4 '>Employee Benefits</h3>

        <div className=' row '>

          <div className="col-lg-4 mt-3 ">
            <Card style={{height:'420px'}} >
              <Card.Img variant="top" src="https://www.taxscan.in/wp-content/uploads/2022/03/Best-Retirement-Plans-Taxscan.jpeg" />
              <Card.Body>
                <Card.Title className='text-center py-2 fw-bolder'>Retirement Plan</Card.Title>
                <Card.Text>
                Retirement planning means preparing today for your future life so that you continue to meet all your goals and dreams independently.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4 mt-3  ">
            <Card style={{height:'420px'}}>
              <Card.Img style={{height:'210px'}} variant="top" src="https://www.kauveryhospital.com/images/newsletters/2022/december/importance-of-medical-insurance.jpg" />
              <Card.Body>
                <Card.Title className='text-center py-2 fw-bolder'>Health Insurance</Card.Title>
                <Card.Text className='my-2'  >
                Health insurance policy is an assurance which provides immediate financial help in case when any medical emergency arises
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4 mt-3">
            <Card style={{height:'420px'}}>
              <Card.Img style={{height:'210px'}} variant="top" src="https://navi.com/blog/wp-content/uploads/2023/03/PF-Withdrawal.jpg" />
              <Card.Body>
                <Card.Title className='text-center py-2 fw-bolder'>Provident Fund</Card.Title>
                <Card.Text>
                A Provident Fund is a savings and retirement fund in India that is typically established and contributed to by salaried employees and their employers.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>


          <div className="col-lg-4 mt-3 ">
            <Card style={{height:'420px'}} >
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
                <Card.Title className='text-center py-2 fw-bolder'>Leave Encashment</Card.Title>
                <Card.Text>
                "Leave encashment" refers to compensation or payment made in return for unused leaves.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4 mt-3  ">
            <Card style={{height:'420px'}}>
              <Card.Img style={{height:'210px'}} variant="top" src="https://www.igecorner.com/wp-content/uploads/2020/06/Commutation-of-Pension.jpg" />
              <Card.Body>
                <Card.Title className='text-center py-2 fw-bolder'>Commutation of Pension</Card.Title>
                <Card.Text className='my-2'  >
                When an employee retires, they can choose to receive a certain percentage of their pension in advance
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4 mt-3">
            <Card style={{height:'420px'}}>
              <Card.Img style={{height:'210px'}} variant="top" src="https://blog.ipleaders.in/wp-content/uploads/2021/07/unnamed-1.jpg" />
              <Card.Body>
                <Card.Title className='text-center py-2 fw-bolder'>Social Security</Card.Title>
                <Card.Text>
                Social Security provides financial protection for our nation's people, supporting Americans throughout all of life's journeys.                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>


      </div>
    </>
  )
}

export default LandingPage