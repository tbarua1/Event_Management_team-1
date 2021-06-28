import React from 'react';
import './styles/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='bttn'>Sign Up</button>
    </Link>
  );
}
