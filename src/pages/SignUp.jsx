import React, { useEffect, useState } from 'react'
import { Nav } from '../components/Nav'
import { FaEnvelope, FaEye, FaFacebookF, FaGoogle, FaLock } from 'react-icons/fa6'

export const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [role, setRole] = useState("")
    const [student, setStudent] = useState(false)
    const [tutor, setTutor] = useState(false)
    useEffect(() => {
        if (role == "Student") {
            setStudent(true)
            setTutor(false)
        } else if (role == "Tutor") {
            setStudent(false)
            setTutor(true)
        }

    }, [role])

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
                    {tutor &&
                        <div className="tutor">
                            <div className="form-input">
                                <input type="text" placeholder='Full Name' />
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder='Name of School' />
                            </div>

                            <div className="select-input-wrap">
                                <div className="select-label">How long have you been teaching?</div>
                                <select name="profession" id="" className='select-input'>
                                    <option value="" disabled selected>Select</option>
                                    <option value="1-2">1-2 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5+">5+ years</option>
                                </select>
                            </div>
                            <div className="desc-wrap">
                                <div className="select-label">Write a brief description of your achievements</div>
                                <textarea name="" id="" className='desc' role='10'></textarea>
                            </div>

                            <div className="select-input-wrap">
                                <div className="select-label">What is your qualification</div>
                                <select name="profession" id="" className='select-input'>
                                    <option value="" disabled selected>Select</option>
                                    <option value="1-2">Bachelors</option>
                                    <option value="3-5">Masters</option>
                                </select>
                            </div>

                            <div className="form-file-input"> Upload Certificate
                                <input type="file" className='file-input' />
                            </div>
                        </div>
                    }

                    {student &&
                        <div className="student">
                            <div className="form-input">
                                <input type="text" placeholder='Full Name' />
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder='Name of School' />
                            </div>

                            <div className="select-input-wrap">
                                <div className="select-label">What is your class</div>
                                <select name="profession" id="" className='select-input'>
                                    <option value="" disabled selected>Select</option>
                                    <option value="1-2">1 year</option>
                                    <option value="3-5">2 year</option>
                                    <option value="5+">3 year</option>
                                </select>
                            </div>

                            <div className="select-input-wrap">
                                <div className="select-label">What is your Course</div>
                                <select name="profession" id="" className='select-input'>
                                    <option value="" disabled selected>Select</option>
                                    <option value="1-2">Visual Arts</option>
                                    <option value="3-5">Science</option>
                                </select>
                            </div>
                        </div>
                    }
                    <div className="submit-btn-wrap">
                        <div className="submit-btn">Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
