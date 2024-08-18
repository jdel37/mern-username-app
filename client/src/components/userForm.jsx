import  { useState } from 'react';


function UserForm({ onAddUser }) {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [annualSalary, setAnnualSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddUser({ userId, username, dateOfBirth, annualSalary });
        setUserId('');
        setUsername('');
        setDateOfBirth('');
        setAnnualSalary('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
               
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Annual Salary</label>
                    <input
                        type="number"
                        value={annualSalary}
                        onChange={(e) => setAnnualSalary(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Add User
            </button>
        </form>
    );
}

export default UserForm;
