import React, { useState } from 'react';
import '../../styles/signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password, confirmPassword });
  };

  return (
    <div>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2 className='h2-login'>Sign Up</h2>
        <div className='email-container form-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='input-signup'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='password-container form-container'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='input-signup'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='confirm-password-container form-container'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            className='input-signup'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className='signup-btn button' type='submit'>
          Sign Up
        </button>
        <a href='/login'>Already have an account?</a>
      </form>
    </div>
  );
};

export default SignUp;
