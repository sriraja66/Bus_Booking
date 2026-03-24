import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 className="logo" style={{ margin: 0 }}>🚌 GoBus</h2>
      </Link>
      <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/buses" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600' }}>Bus List</Link>
        <Link to="/add-bus" style={{ textDecoration: 'none', color: '#2563eb', fontWeight: '600' }}>+ Add Bus</Link>
        <button className="booking-btn" style={{ padding: '0.5rem 1rem', borderRadius: '6px' }}>My Bookings</button>
      </div>
    </div>
  );
}

export default Navbar;
