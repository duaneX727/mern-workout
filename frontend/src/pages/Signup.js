import React, { useState } from 'react';
import {useSignup}  from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();


  const handleSubmit = async (e) => {
    // Prevent browser refresh
    e.preventDefault();
    await signup(email, password);  
    //console.log(password, email);
  };
  return (
      <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>Email:</label>
        <input 
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' disabled={isLoading}>Signup</button>
        {error && <div className='error'>{error}</div>}
      </form>
  );
}

export default Signup;