import React,  { useState }  from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup.jpg';

const cookies = new Cookies();

const initialState = {
    
    username: '',
    email: '',
}
export const ForgotPassword = () => {
    const [form, setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, email } = form
        const URL = 'http://localhost:8080/auth/forgotPassword';
        const { data :{message}} = axios.post(`${URL}`, { username, email });
        console.log('data',message)
    } 

    

 return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>Forgot Password</p>
                    <form onSubmit={handleSubmit}>
                          
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                                <input 
                                    name="username" 
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                      
                        <div className="auth__form-container_fields-content_button">
                            <button>Forgot Passowrd</button>
                        </div>
                    </form>
                    {/* <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                             ? "Already have an account?" 
                             : "Don't have an account?"
                             }
                             <span onClick={switchMode}>
                             {isSignup ? 'Sign In' : 'Sign Up'}
                             </span>
                        </p>
                    </div> */}
                </div> 
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    )
}
