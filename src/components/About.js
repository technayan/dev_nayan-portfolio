import React from 'react';
import ProfileImg from '../dev_nayan.png';
import SectionTitle from '../Shared/SectionTitle';

const About = () => {
    return (
        <section name='About' className='about-section py-14 bg-gradient-to-b from-gray-800 to-black md:py-20'>
            <div className="container px-4 mx-auto md:px-10">
                <SectionTitle children={'About Me'} />
                <div className="md:flex md:gap-10 md:items-center lg:gap-0 xl:gap-10">
                    <div className='md:order-2'>

                        {/* Profile Image */}
                        <img src={ProfileImg} className='mb-14 w-2/3 mx-auto md:mr-0 border-4 border-blue-600 md:w-full md:my-auto lg:w-4/5' alt="Abdullah Nayan" />
                    </div>
                    <div className='md:order-1'>
                        
                        {/* About Description */}
                        <p className="about-text text-lg text-justify text-white 2xl:text-2xl">I am Abdullah Al Mamun Nayan, a professional and dedicated Jr. Web Developer. I love to learn new technologies, create websites and web applications. I want to build a successful career in the full stack development sector. Because, coding is my passion.</p>
                    
                        {/* About Action Button */}
                        <button className='mt-10 px-6 py-2 bg-blue-600 hover:bg-blue-700 duration-300 font-medium text-lg lg:px-8 text-white block mx-auto md:ml-0 2xl:text-2xl 2xl:py-5'>Contact Me</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;