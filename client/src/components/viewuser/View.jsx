import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../main.css'; // Reuse the same CSS

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

useEffect(() => {
  fetch(`http://localhost:8000/api/user/${id}`)
    .then(res => res.json())
    .then(data => setUser(data)) // ← just setUser(data), not data.user
    .catch(err => console.error("Error fetching user", err));
}, [id]);

  return (
    <div className="user-container">
      <div className="user-header">
        <h2>View User</h2>
        <Link to="/" className="add-user-btn">← Back</Link>
      </div>

      {user ? (
        <div className="user-form">
          <div className="form-group">
            <label>Name:</label>
            <div>{user.username}</div>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <div>{user.email}</div>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div>{user.password}</div>
          </div>
        </div>
      ) : (
        <p>Loading user details...</p>
      )} 
    </div>
  );
};

export default ViewUser;
