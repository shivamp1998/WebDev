import axios from 'axios';
import { useState } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(isLogin) {
      const data = {
        email: email,
        password: password,
        returnSecureToken: true
      }
      console.log(data);
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8hP1L-E0nWZH8WMRhQqH5rV02jmDLYNw`, {headers: {'Content-Type' : 'application/json'},body: data})
      .then((response) => {
        console.log(response);
      })
    }else{
      const data = {
        email: email,
        password: password,
        returnSecureToken: true
      }
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8hP1L-E0nWZH8WMRhQqH5rV02jmDLYNw`, {headers: {'Content-Type' : 'application/json'},body: data})
      .then((response) => {
        console.log(response);
        
      })
      
    }

  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required onChange={((e) => setEmail(e.target.value))}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className={classes.actions}>
          <button onClick={(e) => submitHandler(e)}>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
