import React from 'react';
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import SectionTitle from '../Shared/SectionTitle';

const Skills = () => {
    return (
        <section name="Skills" className='skills-section py-14 bg-gradient-to-b from-black to-gray-800 md:py-20'>
            <div className="container px-4 mx-auto md:px-10">
                <SectionTitle children={'My Skills'} />
                
                {/* Skills with Icons */}
                <div className='text-white grid grid-cols-3 md:grid-cols-4 md:gap-x-3 lg:grid-cols-6 lg:gap-x-5'>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaHtml5 className='text-5xl mx-auto mb-2 text-orange-600 duration-300 2xl:text-7xl 2xl:mb-5'/> HTML 5</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaCss3Alt className='text-5xl mx-auto mb-2 text-blue-500 duration-300 2xl:text-7xl 2xl:mb-5'/>CSS 3</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><SiJavascript className='text-5xl mx-auto mb-2 text-yellow-400 duration-300 2xl:text-7xl 2xl:mb-5'/>JavaScript</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaSass className='text-5xl mx-auto mb-2 text-pink-500 duration-300 2xl:text-7xl 2xl:mb-5'/>SASS</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaBootstrap className='text-5xl mx-auto mb-2 text-violet-600 duration-300 2xl:text-7xl 2xl:mb-5'/>Bootstrap</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><SiTailwindcss className='text-5xl mx-auto mb-2 text-blue-500 duration-300 2xl:text-7xl 2xl:mb-5'/>Tailwind</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaReact className='text-5xl mx-auto mb-2 text-blue-400 duration-300 2xl:text-7xl 2xl:mb-5'/>React JS</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaNodeJs className='text-5xl mx-auto mb-2 text-green-600 duration-300 2xl:text-7xl 2xl:mb-5'/>Node JS</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><SiExpress className='text-5xl mx-auto mb-2 text-white duration-300 2xl:text-7xl 2xl:mb-5'/>Express JS</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><SiMongodb className='text-5xl mx-auto mb-2 text-green-400 duration-300 2xl:text-7xl 2xl:mb-5'/>MongoDB</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><FaGithub className='text-5xl mx-auto mb-2 text-white duration-300 2xl:text-7xl 2xl:mb-5'/>GitHub</div>
                    <div className='my-4 inline-block text-center py-2 shadow-lg 2xl:text-2xl 2xl:my-6 hover:scale-110 duration-300 cursor-pointer'><SiFirebase className='text-5xl mx-auto mb-2 text-yellow-500 duration-300 2xl:text-7xl 2xl:mb-5'/>Firebase</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;