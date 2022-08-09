import {useState, useRef, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import classes from '../AuthForm.module.css'
import Loader from "../../UI/Loader/Loader";
import AuthContext from "../../../store/auth-context";
import {Link} from "react-router-dom";


export const Login = () => {

    const usernameInputRef = useRef('');
    const passwordInputRef = useRef('');

    const navigate = useNavigate();

    const authCtx = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredUserName = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;


        setIsLoading(true);

        {
            isLogin &&
            fetch(
                'http://localhost:8081/api/auth/login',
                {
                    method: 'POST',
                    body: JSON.stringify({
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
                    return res.body.getReader();
                } else {
                    return res.json().then(data => {
                        let errorMessage = "Authentication failed";
                        //  if (data && data.error && data.error.message) {
                        //    errorMessage = data.error.message;
                        //  }
                        throw new Error(errorMessage);
                    })
                }
            }).then((data) => {
                authCtx.login(data);
                navigate("/");
            }).catch(err => {
                alert(err.message);
            })
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className={classes.control}>
                <label htmlFor='username'>Your Username </label>
                <input type='username' id='username' required ref={usernameInputRef} />
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' required ref={passwordInputRef}/>
            </div>
            <div className={classes.actions}>
                {!isLoading && <button>Login</button>}
                {isLoading && <Loader/>}
                <button
                    type='button'
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                >
                    <Link to="/signup" className={classes.toggle}>
                        Create new account
                    </Link>
                </button>
            </div>
        </form>
    )
}