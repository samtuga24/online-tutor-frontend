import React, { useState } from 'react'
import { Nav } from '../components/Nav'
import { FaEnvelope, FaLock, FaEye, FaGoogle, FaFacebookF } from 'react-icons/fa6'
export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <Nav />
      <div className="login-form-wrap">
        <div className="login-form">
          <div className="social-login">
            <div className="gmail-icon"><FaGoogle/></div>
            <div className="gmail">Login with Google</div>
          </div>
          <div className="social-login">
            <div className="gmail-icon"><FaFacebookF/></div>
            <div className="gmail">Login with Facebook</div>
          </div>
          <div className="form-input">
            <div className="login-icon"><FaEnvelope /></div>
            <input type="text" placeholder='Email' />
          </div>
          <div className="form-input">
            <div className="login-icon"><FaLock /></div>
            <input type={showPass ? 'text' : 'password'} placeholder='Password' />
            <div className="login-icon-pass" onClick={() => setShowPass(!showPass)}><FaEye /></div>
          </div>
          <div className="submit-btn-wrap">
            <div className="submit-btn">Login</div>
            <div className="f-pass">Forgotten your password?</div>
          </div>
        </div>
      </div>
    </div>
  )
}
