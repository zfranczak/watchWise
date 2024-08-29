// src/components/user-profiles/SignUp.js
import React, { useRef } from 'react';
import '../../styles/signup.css';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return alert('Passwords do not match');
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      alert('Signup successful');
    } catch (error) {
      console.error('Failed to create an account', error);
      alert('Failed to create an account');
    }
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
            ref={emailRef}
            required
          />
        </div>
        <div className='password-container form-container'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='input-signup'
            ref={passwordRef}
            required
          />
        </div>
        <div className='confirm-password-container form-container'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            className='input-signup'
            ref={confirmPasswordRef}
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
