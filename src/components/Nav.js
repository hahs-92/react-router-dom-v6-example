import {NavLink} from 'react-router-dom'
//styles
import styles from '../styles/components/nav.module.css'

const Nav = ({isAuth, setIsAuth}) => {
    return (
        <nav>
            <NavLink
                className= {({isActive}) => isActive ? styles.Nav_isActive : ""}
                to="/">Home
            </NavLink>
            <NavLink
                className= {({isActive}) => isActive ? styles.Nav_isActive : ""}
                to="/about">About
            </NavLink>
            <NavLink
                className= {({isActive}) => isActive ? styles.Nav_isActive : ""}
                to="/users">Users
            </NavLink>
            <NavLink
                className= {({isActive}) => isActive ? styles.Nav_isActive : ""}
                to="/dashboard">Dashboard
            </NavLink>

            <button onClick={() => setIsAuth(!isAuth)}>
                {isAuth ? "SignOut" : "SignIn" }
            </button>


        </nav>
    )
}

export default Nav
