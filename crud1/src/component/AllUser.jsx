import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper } from '@mui/material';
import { useEffect } from "react";
import  { getUser } from "../service/api"
const AllUser = () => {

  const [user , setuser] = useState([]);

   useEffect(() => {
    getAllUsers();
  } , []);

  const getAllUsers = async () => {
   let response =  await getUser();
   setuser(response.data);
  }

  return (
    <>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserNmae</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
          {
            user.map(user => (
              <TableRow>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
           
              </TableRow>
            ))
          }

        <TableBody>
           
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}

export default AllUser;