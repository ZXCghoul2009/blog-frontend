import './Header.css';
import {Link} from 'react-router-dom'
import AddNewPostButton from "../components/UI/Buttons/AddNewPostButton";

export const Header = () => {
    return (
        <header>

            <nav>
                <Link to="/"><AddNewPostButton/></Link>

                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>

            </nav>
        </header>
    )
}