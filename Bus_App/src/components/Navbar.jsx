import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert("Logged out successfully!");
    navigate('/login');
  };

  return (
    <nav className="navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      background: '#fff', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 className="logo" style={{ margin: 0, color: '#2563eb' }}>🚌 GoBus</h2>
      </Link>

      <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/buses" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600' }}>Search Buses</Link>
        
        {token ? (
          <>
            {user?.role === 'uploader' && (
              <Link to="/add-bus" style={{ textDecoration: 'none', color: '#059669', fontWeight: '600' }}>+ Add Bus</Link>
            )}
            <Link to="/my-bookings" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600' }}>My Bookings</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px' }}>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Hi, <strong>{user?.username}</strong></span>
              <button 
                onClick={handleLogout}
                style={{ 
                  padding: '5px 12px', 
                  borderRadius: '4px', 
                  border: '1px solid #d1d5db',
                  background: 'none',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/login" style={{ textDecoration: 'none', color: '#2563eb', fontWeight: '600' }}>Login</Link>
            <Link 
              to="/signup" 
              style={{ 
                textDecoration: 'none', 
                color: '#fff', 
                background: '#2563eb', 
                padding: '0.4rem 1rem', 
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

