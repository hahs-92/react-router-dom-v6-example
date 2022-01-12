import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SignIn = ({isAuth, setIsAuth}) => {
    const navigate = useNavigate()


    useEffect(() => {
        if(isAuth) navigate("/")
    }, [isAuth, navigate])


    return (
        <div>
           You must SingIn
        </div>
    )
}

export default SignIn
