import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { useState } from 'react'
//pages
import Home from '../pages/Home'
import About from '../pages/About'
import Users from '../pages/Users'
import User from '../pages/User'
import NotFound from '../pages/NotFound'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
//components
import Nav from '../components/Nav'
import PrivateRoutes from '../components/PrivateRoutes'


function App() {
  const [isAuth, setIsAuth] = useState(false)


  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path="/signIn" element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
        <Route element={<PrivateRoutes isAuth={isAuth}/>} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />}/>

          <Route path="/dashboard/*"element={<Dashboard />} >
            <Route path="welcome" element={<h3>Welcome</h3>}/>
          </Route>
        </Route>


        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
