import React from 'react';

function UserList({ users, onDeleteUser }) {
    return (
        <ul className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User List</h2>
            {users.length > 0 ? (
                users.map((user) => (
                    <li key={user._id} className="flex justify-between items-center mb-2 border-b border-gray-200 py-2">
                        <span className="text-gray-900">{user.username}</span>
                        <button
                            onClick={() => onDeleteUser(user._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))
            ) : (
                <p className="text-gray-600">No users found</p>
            )}
        </ul>
    );
}

export default UserList;
