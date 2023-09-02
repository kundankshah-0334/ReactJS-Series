import React from "react";
import { Toolbar, AppBar } from '@mui/material';

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background-color: black;
  font-size: 32px;
  color: white;
  padding:0px;
  height:55px;
  margin : 0px;
`;
const Pitem = styled(NavLink)`
   margin-right : 20px;
   padding : 0px;
  font-size: 17px;
  cursor:pointer;
  color: white;
  text-decoration : none;
 
`;
const P1item = styled(NavLink)`
   margin-right : 20px;
   padding : 0px;
  font-size: 22px;
  cursor:pointer;
  color: white;
  text-decoration : none;
 
`;

const Navbar = () => {
  return (
    <>
          <Header position="static">
          <Toolbar>
            <P1item to="/">Home </P1item>
            <Pitem to="/all">AllUser</Pitem>
            <Pitem to="/add">AddUser</Pitem>
          </Toolbar>
            </Header>   
    </>

  );
}

export default Navbar;
