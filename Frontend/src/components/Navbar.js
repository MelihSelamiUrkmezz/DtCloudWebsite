import React from 'react';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <h1 style={{ margin: 0 }}>Dogus Technology Cloud Team</h1>
        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', margin: 0 }}>
          <li style={{ margin: '0 1rem' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Home</Link></li>
          <li style={{ margin: '0 1rem' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/dashboard">Kubeconfig</Link></li>
          <li style={{ margin: '0 1rem' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/contact">Contact</Link></li>
          <li style={{ margin: '0 1rem' }}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/login">Exit</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;