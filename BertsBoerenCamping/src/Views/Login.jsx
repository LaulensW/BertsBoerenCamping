import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Layout from '../components/Layout';

const Login = () => {
  return (
    <body className='login-page'>
        <div>
        <Layout> 
          <LoginForm />
        </Layout> 
      </div>
    </body>
  );
};

export default Login;