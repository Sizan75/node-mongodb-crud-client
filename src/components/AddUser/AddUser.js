import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddUser = () => {
const [user,setUser]=useState({})
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(user)

         fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data =>
            {
                if(data.acknowledged){
                    alert("data added successfully")
                    event.target.reset()
                }
            })
    }
    const handleBlur = (event) =>{
        const field=event.target.name;
        const value=event.target.value;
        const newUser={...user}
        newUser[field]=value;
        setUser(newUser)
    }
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onBlur={handleBlur} name="name" type="text" placeholder="Name" required />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  onBlur={handleBlur} name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>

     
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default AddUser;