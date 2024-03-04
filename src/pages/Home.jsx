import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import { getAllEmployeeDetailsAPI, removeEmployeeDetailsAPI } from '../services/allAPI'

function Home() {

    const [allEmployees, setAllEmployees] = useState([])
    const[employeeUpdate,setEmployeeUpdate]=useState("")


    const getAllEmployeeDetails = async () => {
        const result = await getAllEmployeeDetailsAPI()
        // console.log(result);
        if (result?.status == 200) {
            //    console.log(result?.data);
            setAllEmployees(result.data)

        }

    }

    useEffect(() => {
        getAllEmployeeDetails()

    }, [employeeUpdate])

    console.log(allEmployees);

    const deleteEmp=async(empId)=>{
        await removeEmployeeDetailsAPI(empId)
        getAllEmployeeDetails()
    }




    return (
        <>

            <div className='container'>
                <Add setEmployeeUpdate={setEmployeeUpdate}/>
            </div>

            <div className='container mt-3 border rounded p-3'>
                <h4 className='text-danger fw-bolder text-center py-3'>Employee Details</h4>

                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEmployees?.length > 0 ? allEmployees?.map((details, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{details.employeeName}</td>
                                    <td>{details.age}</td>
                                    <td>{details.designation}</td>
                                    <td>{details.salary}</td>
                                    <td><button onClick={()=>deleteEmp(details.id)} className='btn'><i className="fa-solid fa-trash text-danger py-2"></i></button></td>

                                </tr>
                            )):<div className='text-danger fw-bolder'>Nothing to display</div>
                        }
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default Home