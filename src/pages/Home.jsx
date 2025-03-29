import React from 'react'
import { Nav } from '../components/Nav'
import { Intro } from '../components/Intro'
import { Courses } from '../components/Courses'
import { MobileNav } from '../components/MobileNav'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <div>
            <Nav />
            <Intro />
            <Courses />
            <MobileNav />
            <Footer />
        </div>
    )
}
