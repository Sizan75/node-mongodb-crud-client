import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users=useLoaderData();
    const [displayUsers, setDisplayUsers]=useState(users)
    const handleDelete = (user) =>{
        const agree=window.confirm(`You want to delete this user: ${user.name}`)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('User deleted successfully')
                    const remainingUsers= displayUsers.filter(usr => usr._id !== user._id)
                    setDisplayUsers(remainingUsers)
                }
            })
        }
    }
    return (
        <div>
        <h1>Total Users {displayUsers.length}</h1>    
        {
            displayUsers.map(user => <p key={user._id}>
                {user.name} <br/>  {user.email} <br/>
                <Button onClick={()=>handleDelete(user)} variant="danger">Delete</Button>
                <Link to={`/update/${user._id}`}> <Button variant="warning">Update</Button> </Link>
            </p>)
        }    
        </div>
    );
};

export default Home;