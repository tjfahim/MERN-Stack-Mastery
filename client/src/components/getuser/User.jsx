import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../main.css';


const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    const response = await fetch(`http://localhost:8000/api/user/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    // Update UI after deletion
    setUsers(prev => prev.filter(user => user._id !== id));
  } catch (err) {
    console.error("Delete error:", err);
    alert("Error deleting user");
  }
};
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getAllUsers'); 
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // if (loading) {
  //   return <div className="loading">Loading users...</div>;
  // }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-container">
      <div className="user-header">
        <h2>User Management</h2>
        <Link to={"/add"} className="add-user-btn">
          + Add User        
        </Link>
      </div>
      
      <div className="table-responsive">
        <table className="user-table">
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="action-buttons">
                <Link to={`/edit/${user._id}`} className="btn-edit">Edit</Link>
                <Link to={`/view/${user._id}`} className="btn-view">View</Link>
                <Link onClick={() => handleDelete(user._id)} className="btn-delete">Delete</Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;