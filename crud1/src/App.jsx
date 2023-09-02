import React from "react";
import Navbar from "./component/Navbar";

import AddUser from "./component/AddUser";
import AllUser from "./component/AllUser";
import Project from "./component/Project";
import EditUser from "./component/EditUser";
import Footer from "./footer";

 import {BrowserRouter , Routes , Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Project />} /> 
      <Route exact path="/add" element={<AddUser />} /> 
      <Route exact path="/all" element={<AllUser />} /> 
      <Route exact path="/edit/:id" element={<EditUser />} /> 
 

      </Routes>
     
          
          
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
