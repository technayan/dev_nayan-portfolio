import React from 'react';
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import SectionTitle from '../Shared/SectionTitle';

const Skills = () => {
    return (
        <section className='skills-section py-14 bg-gray-800'>
            <div className="container px-4 mx-auto">
                <SectionTitle children={'Skills'} />
                <div className='text-white grid grid-cols-3'>
                    <div className='my-4 inline-block text-center py-2'><FaHtml5 className='text-5xl mx-auto mb-2 text-orange-600 duration-300'/> HTML 5</div>
                    <div className='my-4 inline-block text-center py-2'><FaCss3Alt className='text-5xl mx-auto mb-2 text-blue-500 duration-300'/>CSS 3</div>
                    <div className='my-4 inline-block text-center py-2'><SiJavascript className='text-5xl mx-auto mb-2 text-yellow-400 duration-300'/>JavaScript</div>
                    <div className='my-4 inline-block text-center py-2'><FaSass className='text-5xl mx-auto mb-2 text-pink-500 duration-300'/>SASS</div>
                    <div className='my-4 inline-block text-center py-2'><FaBootstrap className='text-5xl mx-auto mb-2 text-violet-600 duration-300'/>Bootstrap</div>
                    <div className='my-4 inline-block text-center py-2'><SiTailwindcss className='text-5xl mx-auto mb-2 text-blue-500 duration-300'/>Tailwind</div>
                    <div className='my-4 inline-block text-center py-2'><FaReact className='text-5xl mx-auto mb-2 text-blue-400 duration-300'/>React JS</div>
                    <div className='my-4 inline-block text-center py-2'><FaNodeJs className='text-5xl mx-auto mb-2 text-green-600 duration-300'/>Node JS</div>
                    <div className='my-4 inline-block text-center py-2'><SiExpress className='text-5xl mx-auto mb-2 text-white duration-300'/>Express JS</div>
                    <div className='my-4 inline-block text-center py-2'><SiMongodb className='text-5xl mx-auto mb-2 text-green-400 duration-300'/>MongoDB</div>
                    <div className='my-4 inline-block text-center py-2'><FaGithub className='text-5xl mx-auto mb-2 text-white duration-300'/>GitHub</div>
                    <div className='my-4 inline-block text-center py-2'><SiFirebase className='text-5xl mx-auto mb-2 text-yellow-500 duration-300'/>Firebase</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;