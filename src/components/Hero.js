import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Hero = () => {
    return (
        <section name="home" className="bg-gradient-to-b from-black to-gray-800 pt-24 pb-20 md:pt-40 w-full">
            <div className='container mx-auto px-4 md:px-8'>
                
                {/* Hero Text */}
                <div className="hero-text text-white">
                    <h5 className=' text-xl mt-4'>I'm</h5>
                    <h1 className='font-bold text-4xl leading-tight my-1 uppercase'>Abdullah <span className='text-blue-600 font-bold'>Nayan</span></h1>
                    <h3 className='text-xl'>Jr. Web Developer</h3>
                    <p className='mt-4 mb-8 text-lg'>I am a professional web developer with more than two years of experince. I create web application using React JS, Node JS, Express JS, MonogDB, and Bootstrap or Tailwind.</p>
                    
                    {/* Hero Button */}
                    <div className="flex">
                        <a href="https://drive.google.com/file/d/1PPkRczAxVRmK2mnZiqMkzRN_oej3BapG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='px-6 py-2 border-2 border-blue-600 bg-blue-600 hover:bg-transparent duration-300 inline-block font-medium text-lg mr-5'>Resume</a>
                        <PrimaryBtn children={"Hire Me"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;