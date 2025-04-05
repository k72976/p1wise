// components/PasswordGate.tsx
'use client';

import { useState } from 'react';
import { isAuthorize } from '../actions/admin';

const ADMIN_PASSWORD = '123'; // for demo, in production, fetch securely

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await isAuthorize(enteredPassword)) {
      setAuthorized(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (authorized) return <>{children}</>;

  return (
    <div className="p-4 h-[90vh] flex flex-col justify-center align-middle">
       <form onSubmit={handleSubmit} className="p-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Enter Admin Password:</label>
      <input
        type="password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
        className="border p-2 rounded w-full"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
      >
        Submit
      </button>
      </div>
    </form> 
    </div>
    
  );
}
