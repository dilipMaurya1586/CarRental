import React from 'react'
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedSection />
            <Banner />
            <Testimonial />
            <Newsletter />

        </>
    )
}

export default Home