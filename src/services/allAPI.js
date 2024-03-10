import {commonAPI} from './commonAPI'
import {SERVER_URL} from './server_url'
//Add employee details

export const allEmployeesAPI=async(details)=>{
    return await commonAPI("POST",`${SERVER_URL}/employeeDetails`,details)
}

//get employee details

export const getAllEmployeeDetailsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/employeeDetails`,"")
}

//delete employee details

export const removeEmployeeDetailsAPI=async(empId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/employeeDetails/${empId}`,{})
}

//update employee details

export const updateEmployeeDetailsAPI=async(empId,updatedEmployee)=>{
    return await commonAPI("PUT",`${SERVER_URL}/employeeDetails/${empId}`,updatedEmployee)
}