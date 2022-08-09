import {useState, useRef, useContext} from 'react';

import classes from './AuthForm.module.css';
import {Login} from "./Login/Login";
import {SignUp} from "./SignUp/SignUp";

const AuthForm = () => {


  const [isLogin, setIsLogin] = useState(true);


  return (
    <section className={classes.auth}>
        {isLogin ? (<Login/>) : (<SignUp/>)}
    </section>
  );
};

export default AuthForm;
