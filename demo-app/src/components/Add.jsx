import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Add = () => {
  const[employee, setEmployee]=useState({
    empId:'',
    empName:'',
    designation:'',
    location:''
  })
  const fetchValue=(e)=>{
    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  const sendData=(e)=>{
    console.log(employee)
  }
  
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      {/* { <h2>Employee details</h2> } */}
      <TextField id="standard-basic" label="Employee Id" variant="standard" name="empId" value={employee.empId} onChange={fetchValue}/><br />
       <TextField id="standard-basic" label="Name" variant="standard" name="empName" value={employee.empName} onChange={fetchValue} /><br /> 
      <TextField id="standard-basic" label="Designation" variant="standard" name="designation" value={employee.designation}onChange={fetchValue} /><br />
      <TextField id="standard-basic" label="Location" variant="standard" name="location" value={employee.location}onChange={fetchValue}/><br />
      
      <Button variant="contained" onClick={(sendData)}>Submit</Button>
      
   
    </Box>
  )
}

export default Add