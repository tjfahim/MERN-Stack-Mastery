import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../main.css';
import toast from "react-hot-toast";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/user/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await res.json();
        // Update this line - your API returns the user object directly, not nested in 'user'
        setFormData({
          username: data.username,
          email: data.email,
          password: data.password
        });
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("User updated successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(result.message || "Error updating user");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while updating user");
    }
  };

  if (loading) {
    return <div className="loading">Loading user data...</div>;
  }

  return (
    <div className="user-container">
      <div className="user-header">
        <h2>Edit User</h2>
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
            placeholder="Enter new password (leave blank to keep current)"
          />
        </div>

        <button type="submit" className="btn-submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;