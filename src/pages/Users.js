import {Link} from 'react-router-dom'

const Users = props => {
    return (
        <div>
            Users
            <ul>
                <li>
                    <Link to="/users/1">1</Link>
                </li>
                <li>
                    <Link to="/users/2">2</Link>
                </li>
                <li>
                    <Link to="/users/3">3</Link>
                </li>
            </ul>
        </div>
    )
}


export default Users
