import {Link, Outlet} from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>

            <Link to="welcome">Welcome</Link>
            <hr />

            {/* donde se va pintar el subelemento */}
            <Outlet/>

        </div>
    )
}

export default Dashboard
