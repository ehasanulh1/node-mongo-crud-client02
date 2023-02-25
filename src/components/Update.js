import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User update successfully')
                }
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
        console.log(newUser)
    }
    return (
        <div>
            <h3>You can update user info</h3>
            <form onSubmit={handleUpdateUser}>
                <input onBlur={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputChange} defaultValue={storedUser.address} type="text" name='address' placeholder='address' required />
                <br />
                <input onBlur={handleInputChange} defaultValue={storedUser.email} type="text" name='email' placeholder='email' required />
                <br />
                <button>Add user</button>
            </form>
        </div>
    );
};

export default Update;