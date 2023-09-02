import React, { useState } from "react";
import { Table , TableBody , TableCell ,Button     , TableHead , TableRow ,styled } from '@mui/material';
import { useEffect } from "react";
import  { getUser , deleteUser } from "../service/api";
import {Link } from "react-router-dom";
const StyledTable = styled(Table)`
width:85%;
margin:15px auto 0 auto ;
 
`;
const StyledHead = styled(TableRow)`
background:black;
 & > th {
  color : white;
  font-size : 16px;
 }
 
`;
const Tbody = styled(TableRow)`
 & > td {
  font-size : 16px;
 }
 
`;
const AllUser = () => {

  const [user , setuser] = useState([]);

  

   useEffect(() => {
    getAllUsers();
  } , []);

  const getAllUsers = async () => {

   let response =  await getUser();
   setuser(response.data);
  }

  const deleteUserDetails = async (id) => {
      await deleteUser(id);
      getAllUsers();
  }

  return (
    <>
      {/* <TableContainer component={Paper}> */}
      <StyledTable>
        <TableHead>
          <StyledHead>
            {/* <TableCell>ID</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </StyledHead>
        </TableHead>
          {
            user.map(user => (
              <Tbody key={user._id}>
                {/* <TableCell>{user._id}</TableCell> */}
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => {deleteUserDetails(user._id)}} >Delete</Button>
                </TableCell>
           
              </Tbody>
            ))
          }

        <TableBody>
           
        </TableBody>
      </StyledTable>
    {/* </TableContainer> */}
    </>

  );
}

export default AllUser;