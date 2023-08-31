import { FormGroup , FormControl ,Button , InputLabel , Typography , Input , styled} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState , useEffect } from "react";
import { adduser , getSingleUser } from "../service/api";
const Container = styled(FormGroup)
`
width : 50%;
align-item : center;
margin :5% auto 0  auto ;
& > div{
    margin-top : 20px;
}
`;
const initialValue = {
    name : "",
    username : "",
    email : "",
    phone : ""
}
const EditUser = () => {
    const [user , setUser] = useState(initialValue);

    const navigate = useNavigate();
    const { id } = useParams();
     


    useEffect(() => {
        loadSingleUser();
       } , []);
    
       const  loadSingleUser = async () => {
        const responce = await getSingleUser(id);
        setUser(responce.data);
        console.log(responce.data);
        
       }


    const OnValueChange = (event) => {
        setUser({...user , [event.target.name] : event.target.value});
        console.log(user);
    }

    const addUserDetail = async () => {
        await adduser(user);
        navigate('/all');
    }


    
 


  return (
    <>
    <Container>
    <Typography variant="h3">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(event) => OnValueChange(event)}  name="name"  value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">UserName</InputLabel>
            <Input name="username" value={user.username} onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email Address</InputLabel>
            <Input name="email" value={user.email} onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input name="phone" value={user.phone} onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
        <Button variant="contained"   >Edit</Button>
        {/* <Button variant="contained" onClick={editUserDetail} >Edit</Button> */}
        </FormControl>
    </Container>
    </>

  );
}

export default EditUser;
