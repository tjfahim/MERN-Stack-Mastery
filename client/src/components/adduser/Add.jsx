import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../main.css'; // Reuse the same CSS
import toast from "react-hot-toast";


const AddUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
  if (res.ok) {
  toast.success("User added successfully!", {
    duration: 1500,
    position: "top-right",
    icon: "✅",
    style: {
      borderRadius: '8px',
      background: '#333',
      color: '#fff',
    },
  });

  setTimeout(() => {
    navigate("/");
  }, 10);
}
 else {
        toast.error(result.message || "Error adding user");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <h2>Add New User</h2>
        <Link to="/" className="add-user-btn">← Back</Link>
      </div>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange} 
            required 
            placeholder="Enter name" 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            required 
            placeholder="Enter email" 
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
            required 
            placeholder="Enter password" 
          />
        </div>

        <button type="submit" className="btn-submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
