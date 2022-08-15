import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Hero = () => {
    return (
        <section name="home" className="bg-gradient-to-b from-black to-gray-800 h-screen w-full flex items-center">
            <div className='container mx-auto px-4'>
                {/* Hero Text */}
                <div className="hero-text text-white py-40">
                    <h5 className=' text-xl mt-4'>I'm</h5>
                    <h1 className='font-bold text-5xl leading-tight my-3 uppercase'>Abdullah <span className='text-blue-600 font-bold'>Nayan</span></h1>
                    <h3 className='text-2xl mt-3'>Jr. Web Developer</h3>
                    <p className='my-4 text-lg'>I am a professional web developer with more than two years of experince. Currently I love to work on web application using React JS, Node JS, Express JS, MonogDB, and Bootstrap or Tailwind.</p>
                    {/* Hero Button */}
                    <PrimaryBtn children={"Resume"}/>
                </div>
            </div>
        </section>
    );
};

export default Hero;