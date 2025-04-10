import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick';
export const Courses = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
      };
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
                        <div className="course-name">English</div>
                        <div className="learners">100+ Learners</div>
                    </div>
                </div>

                <div className="course-wrap">
                    <div className="course">
                        <div className="course-name">English</div>
                        <div className="learners">100+ Learners</div>
                    </div>
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
                <div className="show-courses">Show  all Subjects</div>
            </div>
        </div>
    )
}
