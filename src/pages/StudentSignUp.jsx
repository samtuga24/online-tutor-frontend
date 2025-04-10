import React, { useContext } from 'react'
import NavContext from '../context/NavContext';
import { UserNav } from '../components/UserNav';

export const StudentSignUp = () => {
    const { role, setRole } = useContext(NavContext);
    console.log(role)
    return (
        <>
            <UserNav />
            <div className="student-container">
                <div className="student-wrap">
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
                        <div className="select-label">What is do you want to learn?</div>
                        <select name="profession" id="" className='select-input'>
                            <option value="" disabled selected>Select</option>
                            <option value="1-2">Visual Arts</option>
                            <option value="3-5">Science</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
