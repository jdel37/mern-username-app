import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from '../src/components/UserForm.jsx';
import UserList from '../src/components/UserList.jsx';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (err) {
                console.error('Error fetching users:', err);
            }
        };
        fetchUsers();
    }, []);

    const handleAddUser = async (newUser) => {
        try {
            const response = await axios.post('/api/users', newUser);
            setUsers([...users, response.data]);
        } catch (err) {
            console.error('Error adding user:', err);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    return (
        <div className="App container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>
            <UserForm onAddUser={handleAddUser} />
            <UserList users={users} onDeleteUser={handleDeleteUser} />
        </div>
    );
}

export default App;
