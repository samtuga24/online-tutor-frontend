import React, { useContext, useEffect, useState } from 'react'
import { Nav } from '../components/Nav'
import { FaEnvelope, FaEye, FaFacebookF, FaGoogle, FaLock } from 'react-icons/fa6'
import NavContext from '../context/NavContext';
import {  useNavigate } from 'react-router-dom'

export const SignUp = () => {
    let navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const {role, setRole} = useContext(NavContext);
    console.log(role)


    const submit = () => {
        if(role == "Student"){
            navigate("../register-student")
            window.location.reload()
        }else if(role == "Tutor"){
            navigate("../register-tutor")
        } else{
            navigate("../signup")
        }
    }
    return (
        <div>
            <Nav />
            <div className="login-form-wrap">
                <div className="login-form">
                    {/* <div className="social-login">
                        <div className="gmail-icon"><FaGoogle /></div>
                        <div className="gmail">Sign Up with Google</div>
                    </div>
                    <div className="social-login">
                        <div className="gmail-icon"><FaFacebookF /></div>
                        <div className="gmail">Sign Up with Facebook</div>
                    </div> */}
                    <div className="form-input">
                        <div className="login-icon"><FaEnvelope /></div>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="form-input">
                        <div className="login-icon"><FaLock /></div>
                        <input type={showPass ? 'text' : 'password'} placeholder='Password' />
                        <div className="login-icon-pass" onClick={() => setShowPass(!showPass)}><FaEye /></div>
                    </div>

                    <div className="form-input">
                        <div className="login-icon"><FaLock /></div>
                        <input type={showPass ? 'text' : 'password'} placeholder='Confirm password' />
                        <div className="login-icon-pass" onClick={() => setShowPass(!showPass)}><FaEye /></div>
                    </div>

                    <div className="select-input-wrap">
                        <div className="select-label">Are you a Student or Tutor?</div>
                        <select name="role" value={role} id="" className='select-input' onChange={(e) => setRole(e.target.value)}>
                            <option value="" disabled selected>Select</option>
                            <option value="Student">Student</option>
                            <option value="Tutor">Tutor</option>
                        </select>
                    </div>


                    <div className="submit-btn-wrap">
                        <div className="submit-btn" onClick={submit}>Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
