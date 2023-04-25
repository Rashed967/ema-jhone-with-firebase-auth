import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const [error, setError] = useState('')

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(confirm !== password){
            setError("Password did not matched")
        }
        else if(password.length < 6){
            setError("Password should be at least 6 char")
        }
        createUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            
            console.log(loggedUser)
        }) 
        .catch(error => {
            console.error(error.message)
        })
    }


    return (
        <div className="form-container">
            <h2 className="form-title">Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>

                <div className="form-control">
                   <label htmlFor="password">Password</label>
                   <input type="password" name="password" id="" required/>
                </div>
                <div className="form-control">
                   <label htmlFor="confirm">Confirm Password</label>
                   <input type="password" name="confirm" id="" required/>
                   <small className='error-text'><em>{error}</em></small>
                </div>
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
            <small><p>Already have an account? <Link to="/login">Login</Link> </p></small> 
        </div>
    );
};

export default SignUp;