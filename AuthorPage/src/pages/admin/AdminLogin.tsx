import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-card shadow-card p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-bold font-header text-primary mb-4 text-center">Admin Access</h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="w-full p-3 rounded border border-gray-300 mb-4 font-body"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-3 rounded-full hover:opacity-90"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
