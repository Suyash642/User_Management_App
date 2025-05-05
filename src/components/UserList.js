import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getAllUsers = async () => {
        try {
            const response = await axios.get('http://localhost:9090/api/users/fetchAll');
            setUsers(response.data);
        } catch (err) {
            setError('Failed to load users....');
        } finally {
            setLoading(false);
        }
    };

    // Called this only once, after component mounted
    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">
                <i className="bi bi-people-fill me-2"></i>
                All User's Details
            </h2>

            {loading ? (
                <h3 className='text-center'>Loading Users...</h3>
            ) : error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <div className='table-responsive'>
                    <table className="table table-dark table-bordered table-responsive table align-middle table-hover">
                        <thead>
                            <tr>
                                <th className='text-center'>ID</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>About User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className='text-center p-3 me-3'>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.about}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserList;
