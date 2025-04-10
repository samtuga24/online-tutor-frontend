import React from 'react'
import { StudentNav } from '../components/StudentNav'
import { FaAngleRight } from 'react-icons/fa6'
export const StudentDashboard = () => {
  return (
    <>
      <StudentNav />

      <div className="s-dash-container">
        <div className="dash-1">
          <div className="courses-card">
            <div className="card-wrap">
              <div className="card-title">My Courses</div>
              <div className="card-desc">
                <div className="desc-name-wrap">
                  <div className="desc-name">Elective Mathematics <br /><span className='tutor-name'>Samtuga</span></div>
                  <div className="desc-icon"><FaAngleRight /></div>
                </div>
                <div className="progress-icon"><progress value={75} max={100} /></div>
                <div className="progress">Upcomming 75%</div>
                <div className="course-btns">
                  <div className="c-btn-1">Join Session</div>
                  <div className="c-btn-2">View Course</div>
                  <div className="c-btn-3">Chat Tutor</div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-wrap">
            <div className="notify-title">Upcoming Sessions</div>
            <div className="n-item-wrap">
              <div className="n-item">April 25 at 3:00 PM<br/><span className='n-sub'>Maths</span></div>
              <div className="n-item-btn">Join Now</div>
            </div>

            <div className="n-item-wrap">
              <div className="n-item">April 28 at 3:00 PM<br/><span className='n-sub'>English</span></div>
              <div className="n-item-btn-up">Jude</div>
            </div>

            <div className="n-item-wrap">
              <div className="n-item">April 20 at 3:00 PM<br/><span className='n-sub'>ICT</span></div>
              <div className="n-item-btn-up">Samtuga</div>
            </div>
          </div>          
        </div>
        <div className="dash-1">
          <div className="session-wrap">
            <div className="session-title"></div>
            <div className="session-item-wrap">
              <div className="session-item"></div>
              <div className="session-"></div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
