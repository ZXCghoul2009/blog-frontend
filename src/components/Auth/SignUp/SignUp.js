import {useState, useRef, useContext} from 'react';

import classes from '../AuthForm.module.css'
import Loader from "../../UI/Loader/Loader";
import AuthContext from "../../../store/auth-context";
import {Link} from "react-router-dom";


export const SignUp = () => {

    const [passwordTittle, setPasswordTittle] = useState('')

    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredUserName = usernameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;


        setIsLoading(true);

        {
            isLogin &&
            fetch(
                'http://localhost:8080/api/auth/signup',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        username: enteredUserName,
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

                } else {
                    return res.json().then(data => {
                        let errorMessage = "Authentication failed";
                        //  if (data && data.error && data.error.message) {
                        //    errorMessage = data.error.message;
                        //  }
                        throw new Error(errorMessage);
                    })
                        .then((data) => {
                            authCtx.login(data.idToken)
                        })
                        .catch((err) => {
                            alert(err.message)
                        });
                }
            });
        };
    }
    return(
        <section className={classes.auth}>
        <form onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <div className={classes.control}>
                <label htmlFor='username'>Your Username </label>
                <input type='username' id='username' required ref={usernameInputRef} />
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' required ref={emailInputRef} />
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' placeholder="Must be at least 6 symbols " minLength={6} required ref={passwordInputRef}/>
                <label htmlFor='password'>Confirm your password</label>
                <input type='password' id='password' minLength={6} required  />
            </div>
            <div className={classes.actions}>
                {!isLoading && <button>Create Account</button>}
                {isLoading && <Loader/>}
                <button
                    type='button'
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                >
                    <Link to="/login" className={classes.toggle}>
                        Login with existing account
                    </Link>
                </button>
            </div>
        </form>
        </section>
    )
}