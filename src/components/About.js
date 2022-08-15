import React from 'react';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

import ProfileImg from '../dev_nayan.png';
import SectionTitle from '../Shared/SectionTitle';

const About = () => {
    return (
        <section className='about-section py-14 bg-gray-900'>
            <div className="container px-4 mx-auto">
                <SectionTitle children={'About'} />
                <img src={ProfileImg} className='mb-14 w-2/3 mx-auto border-4 border-blue-600' alt="Abdullah Nayan" />
                <p className="about-text text-lg text-justify text-white">I am Abdullah Al Mamun Nayan, a professional and dedicated Jr. Web Developer with more than two years of experience in static website development. currently I am learning Full Stack Web Development. I love to learn new technologies, create websites and web applications. I want to build a successful career in the full stack development sector. Because, coding is my passion.</p>
                
                <ul className='flex justify-center mt-12'>
                                <li><a className='inline-block mx-5' href="https://www.facebook.com/dev.nayan20" target="_blank" rel="noopener noreferrer"><FaFacebookF className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                                <li><a className='inline-block mx-5' href="https://www.linkedin.com/in/md-abdullah-nayan-711884220/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                                <li><a className='inline-block mx-5' href="https://twitter.com/dev_nayan1" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                                <li><a className='inline-block mx-5' href="https://github.com/technayan" target="_blank" rel="noopener noreferrer"><FaGithub className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                </ul>
            </div>
        </section>
    );
};

export default About;