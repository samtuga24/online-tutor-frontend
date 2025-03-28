import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
export const Courses = () => {
    return (
        <div className='course-container'>
            <div className="course-title">
                <div className="nav-left">
                    <FaAngleLeft/>
                </div>
                <div className="course-wrap">
                    <div className="course">
                        <div className="course-name">English</div>
                        <div className="learners">100+ Learners</div>
                    </div>
                </div>

                <div className="course-wrap">
                    <div className="course">
                        <div className="course-name">Mathematics</div>
                        <div className="learners">100+ Learners</div>
                    </div>
                </div>

                <div className="course-wrap">
                    <div className="course">
                        <div className="course-name">Science</div>
                        <div className="learners">100+ Learners</div>
                    </div>
                </div>

                <div className="course-wrap">
                    <div className="course">
                        <div className="course-name">Physics</div>
                        <div className="learners">100+ Learners</div>
                    </div>
                </div>

                <div className="course-wrap">
                    <div className="course">
                        <div className="course-name">Chemistry</div>
                        <div className="learners">100+ Learners</div>
                    </div>
                </div>

                <div className="nav-right">
                    <FaAngleRight/>
                </div>
            </div>
            <div className="course-list">
                <div className="list-wrap">
                    <div className="course-li"></div>
                </div>
            </div>
            <div className="show-courses-wrap">
                <div className="show-courses">Show  all Courses</div>
            </div>
        </div>
    )
}
