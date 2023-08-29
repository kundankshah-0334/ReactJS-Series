import { FormGroup , FormControl ,Button , InputLabel , Typography , Input , styled} from "@mui/material";
import React, { useState } from "react";

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
    usename : "",
    email : "",
    phone : ""
}
const AddUser = () => {


    const [user , setUser] = useState(initialValue);
    const OnValueChange = (event) => {
        setUser({...user , [event.target.name] : event.target.value});
        console.log(user);
    }

  return (
    <>
    <Container>
    <Typography variant="h3">Add User</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input name="name" onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">UserName</InputLabel>
            <Input name="username" onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email Address</InputLabel>
            <Input name="email" onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input name="phone" onChange={(event) => OnValueChange(event)} aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
        <Button variant="contained">Add</Button>
        </FormControl>
    </Container>
    </>

  );
}

export default AddUser;
