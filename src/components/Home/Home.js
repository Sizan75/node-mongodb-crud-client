import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users=useLoaderData();

    return (
        <div>
        <h1>Total Users {users.length}</h1>    
        {
            users.map(user => <p key={user._id}>
                {user.name}  {user.email}
            </p>)
        }    
        </div>
    );
};

export default Home;