import React from 'react'
import { StudentNav } from '../components/StudentNav'
import { FaAngleRight } from 'react-icons/fa6'
import ReactApexChart from 'react-apexcharts'
export const StudentDashboard = () => {
  const [state, setState] = React.useState({
          
    series: [70],
    options: {
      chart: {
        height: 300,
        type: 'radialBar',
      },
      labels: ['Course'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },

      },
      colors:['#021148'],
      
    },
  
  
});
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
                <div className="progress-icon"><progress value={75} max={100}/></div>
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
              <div className="n-item">April 25 at 3:00 PM<br /><span className='n-sub'>Maths</span></div>
              <div className="n-item-btn">Join Now</div>
            </div>

            <div className="n-item-wrap">
              <div className="n-item">April 28 at 3:00 PM<br /><span className='n-sub'>English</span></div>
              <div className="n-item-btn-up">Jude</div>
            </div>

            <div className="n-item-wrap">
              <div className="n-item">April 20 at 3:00 PM<br /><span className='n-sub'>ICT</span></div>
              <div className="n-item-btn-up">Samtuga</div>
            </div>
          </div>
        </div>
        <div className="dash-1">
          <div className="dash-2">
            <div className="chart-wrap">
              <div className="chart">
                <div className="assign-title">Progress Overview</div>
                <ReactApexChart options={state.options} series={state.series} type="radialBar" height={300} />
              </div>
            </div>
            <div className="assignment-wrap">
              <div className="assign-wrap">
                <div className="assign-title">Notifications</div>
              </div>
              <div className="sub-assign-wrap">
                <div className="sub-assign-title">
                  <div className="assign-title">Assignments</div>
                  <div className="assign-status">Status</div>
                </div>
                <div className="assign-desc-wrap">
                  <div className="assignment">Essay</div>
                  <div className="status">
                    <div className="status-text">Not Submitted</div>
                    <div className="status-icon"><FaAngleRight /></div>
                  </div>
                </div>

                <div className="assign-desc-wrap">
                  <div className="assignment">Mathematics</div>
                  <div className="status">
                    <div className="status-text">May 2</div>
                    <div className="status-icon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
