import React from "react";
// import AppBar from '@mui/material/AppBar'; 
// import Toolbar from '@mui/material/Toolbar';

import { AppBar , Toolbar , styled } from "@mui/material";
 

const Header = styled(AppBar)`
background : #111111
`;
const Navbar = () => {
    <>
        <Header>
            <Toolbar>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>

            </Toolbar>
        </Header>
    </>
};

export default Navbar;
