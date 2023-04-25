import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const [set, setShow] = useState(false)
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const loggeduser = result.user;
            console.log(loggeduser)
            form.reset()
            navigate(from, {replace : true})
        })
        .catch(error => {
            console.error(error.message)
        })
    }
  

    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleSignIn} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>

                <div className="form-control">
                   <label htmlFor="password">Password</label>
                   <input type={set ? "text" : "password"} name="password" id="" required/>
                   {<p onClick={() => setShow(!set)}>{
                    set ? "Hide Password" : "Show password"
                   }</p>  }
                </div>
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
            <small><p>New to Ema-john?  <Link to="/signup">Create New Account</Link> </p></small>
        </div>
    );
};

export default Login;