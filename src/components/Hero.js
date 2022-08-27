import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Hero = () => {
    return (
        <section name="Home" className="bg-gradient-to-b from-black to-gray-800 pt-24 pb-20 md:pt-40 w-full lg:h-[650px]">
            <div className='container mx-auto px-4 md:px-8'>
                
                {/* Hero Text */}
                <div className="hero-text text-white lg:text-center">
                    <h5 className='text-xl mt-4 2xl:text-3xl'>I'm</h5>
                    <h1 className='font-bold text-4xl leading-tight my-1 uppercase lg:text-5xl lg:my-3 2xl:text-6xl 2xl:my-5'>Abdullah <span className='text-blue-600 font-bold'>Nayan</span></h1>
                    <h3 className='text-xl 2xl:text-4xl'>Jr. Web Developer</h3>
                    <p className='mt-4 mb-8 text-lg lg:w-5/6 lg:mt-6 lg:mx-auto 2xl:w-3/4 2xl:text-2xl 2xl:mt-8 2xl:mb-12'>I am a professional web developer with more than two years of experince. I create web application using React JS, Node JS, Express JS, MonogDB, and Bootstrap or Tailwind.</p>
                    
                    {/* Hero Button */}
                    <div className="flex lg:justify-center lg:gap-4">
                        <a href="https://drive.google.com/file/d/1PPkRczAxVRmK2mnZiqMkzRN_oej3BapG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='px-6 py-2 border-2 border-blue-600 bg-blue-600 hover:bg-transparent duration-300 inline-block font-medium text-lg mr-5 lg:px-8 lg:mr-0 2xl:text-2xl 2xl:py-4 2xl:px-10'>Resume</a>
                        <PrimaryBtn children={"Hire Me"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;