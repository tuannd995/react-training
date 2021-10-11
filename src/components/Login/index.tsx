import { USERS } from 'fakeData/users';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { login } from 'utils/auth';
import './Login.scss';
import { useLoginForm } from './useLoginForm';

function Login() {
   const history = useHistory();

   // handle login
   const handleLogin = () => {
      const { username, password } = values;
      if (username && password) {
         const user = USERS.find((user) => {
            return user.username === username && user.password === password;
         });

         if (!user) {
            alert('Login information is incorrect!');
         } else {
            login(user);
            resetForm();
            history.push('/');
            window.location.reload();
         }
      }
   };
   const { values, errors, handleChange, handleSubmit, resetForm } =
      useLoginForm(handleLogin);

   return (
      <div className="loginForm">
         <form onSubmit={handleSubmit}>
            <h1>Login to Dashboard</h1>
            <div className="login__item">
               <div className="login__item-input">
                  <label>Username</label>
                  <input
                     type="text"
                     placeholder="Username"
                     onChange={handleChange}
                     value={values.username || ''}
                     name="username"
                  />
                  <div className="login__err">{errors.username}</div>
               </div>
            </div>
            <div className="login__item">
               <div className="login__item-input">
                  <label>Password</label>
                  <input
                     id="password"
                     type="password"
                     placeholder="Password"
                     onChange={handleChange}
                     value={values.password || ''}
                     name="password"
                  />
                  <div className="login__err">{errors.password}</div>
               </div>
            </div>
            <button type="submit">Log In</button>
         </form>
      </div>
   );
}

export default Login;
