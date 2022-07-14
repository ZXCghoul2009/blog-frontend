import { Link } from 'react-router-dom';
import AuthContext from "../../store/auth-context";
import classes from './MainNavigation.module.css';
import {useContext} from "react";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext)

  const logoutHandler = () => {
      authCtx.logout();
  };

  const isLoggedIn = authCtx.isLoggedIn

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>10Iq</div>
      </Link>
      <nav>
        <ul>
            {!isLoggedIn &&
            (<li>
                <Link to='/login'>Login</Link>
            </li>)}
            {isLoggedIn &&
            (<li>
                <Link to='/profile'>Profile</Link>
            </li>)}
            {isLoggedIn &&
            (<li>
                <button onClick={logoutHandler}>Logout</button>
            </li>)}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
