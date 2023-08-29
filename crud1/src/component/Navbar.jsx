import React from "react";
import { Toolbar, AppBar } from '@mui/material';

import styled from "@emotion/styled";

const Header = styled(AppBar)`
  background-color: black;
  font-size: 32px;
  color: white;
`;
const Pitem = styled('p')`
   margin-right : 20px;
  font-size: 32px;
 
`;

const Navbar = () => {
  return (
    <>
          <Header>
          <Toolbar>
            <Pitem>Project </Pitem>
            <Pitem>Add</Pitem>
            <Pitem>Remove</Pitem>
            <Pitem>Update </Pitem>
          </Toolbar>
            </Header>   
    </>

  );
}

export default Navbar;
