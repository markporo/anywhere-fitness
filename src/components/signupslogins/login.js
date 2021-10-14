//1. User can create/register as a client and login with the registered credentials.
// MARK
import { useContext, useState } from "react";
import { Redirect, } from "react-router";
import { useHistory } from "react-router";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { GlobalPropsContext } from '../GlobalPropsContext'

// Initial log in form values
const initialLogInFormValues = { username: "", password: "" };

export default function Login() {
    const [loginFormValues, setLogInFormValues] = useState(initialLogInFormValues);
    const { isLoading, setIsLoading } = useContext(GlobalPropsContext);
    let history = useHistory();

    const onChange = (e) => {
        setLogInFormValues({
            ...loginFormValues, [e.target.name]: e.target.value
        })
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(isLoading);

        //if user === client
        axiosWithAuth().post('/login', loginFormValues)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                console.log("login", res);
                setIsLoading(false);
                history.push('/protected');
            })
            .catch(err => {
                console.log(err);
                <Redirect to="/login" />
            })
        //if user === instructor

    }

    return (
        <div>
            <form onSubmit={loginSubmitHandler} className="form">
                <h1>Let's Get Fit!</h1>
                <input
                    placeholder="username"
                    name="username"
                    label="username"
                    type="text"
                    id="username"
                    onChange={onChange}
                    value={loginFormValues.username}
                />
                <input
                    placeholder="password"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={onChange}
                    value={loginFormValues.password}
                />
                <button type="submit">
                    LogIn
                </button>
            </form>
            <p onClick="{}" className="finePrintUnderForm" >Click Here To Login as Instructor</p>
        </div>
    )
}

// onClick={()=> {props.setLogInFormValues()}}
//add in login for instructor link in small print under form maybe...
// <Link to="/logininstructor">instructor login</Link>

// <Link to="/signup">Sign Up</Link>

 //<Link to="/signupinstructor">SignupInstructor</Link>//