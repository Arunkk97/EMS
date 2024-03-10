import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { allEmployeesAPI } from '../services/allAPI';



function Add({ setEmployeeUpdate }) {
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeName: '',
    age: '',
    designation: '',
    salary: ''

  })
  console.log(employeeDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmployeeDetails({ ...employeeDetails, employeeName: "", age: "", designation: "", salary: "" })
  }
  const handleShow = () => setShow(true);

  const handleDetails = async () => {
    const { employeeName, age, designation, salary } = employeeDetails

    let timeData = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-us', {
      year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(timeData)
    console.log(timeStamp);


    if (employeeName && age && designation && salary) {
      const result = await allEmployeesAPI({employeeName, age, designation, salary,timeStamp})
      console.log(result.data);
      if (result.status >= 200 && result.status < 300) {
        alert(`${result.data.employeeName} details successfully added`)
        setEmployeeUpdate(result?.data)
        handleClose()

      } 
      else {
        alert('Failed to fetch API')
      }

    } 
    else {
      alert('Please fill the form completely!!!')
    }
  }


  return (
    <>
      <button onClick={handleShow} className='btn btn-info mt-5'>Add Employee</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel
            controlId="floatingInput"
            label="Employee Name"
            className="mb-3">
            <Form.Control value={employeeDetails.employeeName} onChange={(e) => setEmployeeDetails({ ...employeeDetails, employeeName: e.target.value })} type="text" placeholder="Employee Name" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Age"
            className="mb-3">
            <Form.Control value={employeeDetails.age} onChange={(e) => setEmployeeDetails({ ...employeeDetails, age: e.target.value })} type="number" placeholder="Age" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Designation"
            className="mb-3">
            <Form.Control value={employeeDetails.designation} onChange={(e) => setEmployeeDetails({ ...employeeDetails, designation: e.target.value })} type="ntext" placeholder="Designation" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Salary"
            className="mb-3">
            <Form.Control value={employeeDetails.salary} onChange={(e) => setEmployeeDetails({ ...employeeDetails, salary: e.target.value })} type="number" placeholder="Salary" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDetails} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add