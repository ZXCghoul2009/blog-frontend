import {useState, useRef, useContext} from 'react';

import classes from './AuthForm.module.css';
import Loader from "../UI/Loader/Loader";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const usernameInputRef = useRef('');
  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');

  const authCtx = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    setIsLoading(true);

    if (isLogin) {
      fetch(
          'http://localhost:8080/api/auth/login',
          {
            method: 'POST',
            body: JSON.stringify({
              username: enteredUsername,
              password: enteredPassword
            }),
            headers: {
              'Content-Type': 'application/json',
              'Accept': '*/*'
            }
          }

      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
            authCtx.login(res)
        } else {
          return res.json().then(data => {
            let errorMessage = "Authentication failed";
          //  if (data && data.error && data.error.message) {
          //    errorMessage = data.error.message;
          //  }
            throw new Error(errorMessage);
          }).then((data)=> {

              })
              .catch((err)=> {
                alert(err.message)
              });
        }
      })
      ;
    } else {
      fetch(
          'http://localhost:8080/api/auth/signup',
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              username: enteredUsername,
              password: enteredPassword
            }),
            headers: {
              'Content-Type': 'application/json',
              'Accept': '*/*'
            }
          }

      ).then(res => {
        setIsLoading(false);
      if (res.ok) {
          console.log(res)
            return res;
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed";
          //  if (data && data.error && data.error.message) {
          //    errorMessage = data.error.message;
          //  }
          throw new Error(errorMessage);
        })
            .then((data)=> {
              authCtx.login(data.res)
            })
            .catch((err)=> {
              alert(err.message)
            });
      }
    });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          {isLogin ?
              <div>
                <label htmlFor='username'>Your username</label>
                <input type='text' id='username' autoComplete="off"  required ref={usernameInputRef} />
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' autoComplete="off" required ref={passwordInputRef} />
              </div>

              :
              <div>
                <label htmlFor='username'>Your Username </label>
                <input type='text' id='username' required ref={usernameInputRef} />
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' autoComplete="off"  required ref={emailInputRef} />
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' autoComplete="off" placeholder="At least 6 symbols" required minLength={6} ref={passwordInputRef}/>
              </div> }
          </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <Loader/>}
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
