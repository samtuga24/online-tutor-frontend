import React from 'react'

export const TutorSignUp = () => {
    return (
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
    )
}
