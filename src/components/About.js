import React from 'react';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

import ProfileImg from '../dev_nayan.png';
import SectionTitle from '../Shared/SectionTitle';

const About = () => {
    return (
        <section className='about-section py-14 bg-gradient-to-b from-gray-800 to-black md:py-20'>
            <div className="container px-4 mx-auto md:px-10">
                <SectionTitle children={'About'} />
                <div className="md:flex md:gap-10 md:items-center">
                    <div className='md:order-2'>

                        {/* Profile Image */}
                        <img src={ProfileImg} className='mb-14 w-2/3 mx-auto border-4 border-blue-600 md:w-full md:my-auto' alt="Abdullah Nayan" />
                    </div>
                    <div className='md:order-1'>
                        
                        {/* About Description */}
                        <p className="about-text text-lg text-justify text-white">I am Abdullah Al Mamun Nayan, a professional and dedicated Jr. Web Developer. I love to learn new technologies, create websites and web applications. I want to build a successful career in the full stack development sector. Because, coding is my passion.</p>
                    
                        {/* Social Media Links */}
                        <ul className='flex justify-center mt-12 md:mt-8 md:justify-start'>
                            <li><a className='inline-block mr-5 md:mr-4' href="https://www.facebook.com/dev.nayan20" target="_blank" rel="noopener noreferrer"><FaFacebookF className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                            <li><a className='inline-block mx-5 md:mx-4' href="https://www.linkedin.com/in/md-abdullah-nayan-711884220/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                            <li><a className='inline-block mx-5 md:mx-4' href="https://twitter.com/dev_nayan1" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                            <li><a className='inline-block mx-5 md:mx-4' href="https://github.com/technayan" target="_blank" rel="noopener noreferrer"><FaGithub className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;