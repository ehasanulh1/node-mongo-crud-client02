import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
        console.log(user, newUser)
    }
    return (
        <div>
            <h3>Please add a User</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='email' placeholder='email' required />
                <br />
                <input type="button" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;