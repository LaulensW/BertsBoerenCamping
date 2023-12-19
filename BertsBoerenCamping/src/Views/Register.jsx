import React from 'react';
import LoginForm from '../components/RegisterForm.jsx';
import Layout from '../components/Layout';

const Register = () => {
  return (
    <div>
      <Layout> 
        <h2>Register Page</h2>
        <LoginForm />
      </Layout> 
    </div>
  );
};

export default Register;