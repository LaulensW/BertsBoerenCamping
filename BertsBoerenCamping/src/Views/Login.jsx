import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Layout from '../components/Layout';

const Login = () => {
  return (
    <div>
      <Layout> 
        <h2>Login Page</h2>
        <LoginForm />
      </Layout> 
    </div>
  );
};

export default Login;