import React from 'react';

function UserList({ users, onDeleteUser }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul className="space-y-4">
                    {users.map(user => (
                        <li key={user._id} className="flex items-center justify-between p-4 border border-gray-300 rounded-md">
                            <div>
                                <p className="font-semibold">{user.username}</p>
                                <p>Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}</p>
                                <p>Annual Salary: ${user.annualSalary}</p>
                            </div>
                            <button
                                onClick={() => onDeleteUser(user._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;
