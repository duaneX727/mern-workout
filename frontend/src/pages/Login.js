import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin();

  const handleSubmit = async (e) => {
    // Prevent browser refresh
    e.preventDefault();
    await login(email, password);
    //console.log(password, email);
  };
  return (
      <form className='login' onSubmit={handleSubmit}>
        <h3>Log in</h3>
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
        <button disabled={isLoading} type='submit'>Log in</button>
        {error && <div className='error'>{error}</div>}
      </form>
  );
}

export default Login;