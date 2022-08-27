import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const ProjectDetails = ({project, status, setStatus}) => {
    const changeStatus = () => {
        setStatus(false);
    }
    return (
        <div className={`overlay ${status ? 'block' : 'hidden'} fixed top-0 left-0 bg-black/75 w-full h-full z-50`}>
            <div className={`project px-2 pb-3 border-2 bg-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-4/5 z-20 text-white border-gray-700 overflow-y-scroll md:px-3 md:pb-5 lg:px-5 lg:pb-10 xl:w-10/12 2xl:w-6/12`}>
                <div className="flex justify-end sticky w-full -top-1 right-0 bg-gray-900 z-20 2xl:py-3">
                    {/* Modal Close Btn */}
                    <button onClick={changeStatus} className='my-3 p-1 border-2 rounded-full text-white'>
                        <AiOutlineClose className='text-xl 2xl:text-2xl'/>
                    </button>
                </div>

                {/* Project Info */}
                <div className="mx-1">
{/* Project Image */}
<img src={project?.imageUrl} alt={project?.name} />
                
                {/* Project Title */}
                <h3 className='text-2xl font-bold mt-5 mb-3 text-white relative md:mt-8 md:text-3xl 2xl:text-5xl 2xl:mt-12'>{project?.name}<span className='absolute -top-8 left-0 text-xs font-light bg-blue-600 px-3 py-1 rounded-2xl md:-top-12 lg:px-6 lg:text-base 2xl:text-xl 2xl:px-10 2xl:-top-16 2xl:py-2 2xl:rounded-full'>{project?.stack}</span></h3>
                
                {/* Project Description */}
                <p className='text-justify 2xl:text-2xl'>{project?.description}</p>
                
                {/* Project's Features */}
                <h4 className='mt-5 mb-1 font-medium text-xl text-blue-400 lg:text-2xl lg:mt-8 2xl:text-4xl 2xl:mb-5 2xl:mt-10'>Features:</h4>
                <ol className='ml-5'>
                    {
                        project?.features.map(feature => <li key={feature.id} className='list-disc my-2 ml-2 2xl:text-2xl'>{feature.feature}</li>)
                    }
                </ol>

                {/* Project's Technologies */}
                <h4 className='mt-5 mb-1 font-medium text-xl text-blue-400 lg:text-2xl lg:mt-8 2xl:text-4xl 2xl:mb-5 2xl:mt-10'>Technologies:</h4>
                <ol className='ml-5'>
                    {
                        project?.technologies.map(technology => <li key={technology.id} className='list-disc my-2 ml-2 2xl:text-2xl 2xl:my-4'>{technology.name}</li>)
                    }
                </ol>

                {/* Project's Action Buttons */}
                <div className="flex flex-col justify-between gap-3 mt-8 md:flex-row lg:gap-5 lg:mt-10">
                    <a className='py-3 w-full text-center bg-blue-600 font-medium hover:bg-blue-700 duration-300 flex items-center justify-center md:text-lg 2xl:text-2xl 2xl:py-5' href={project?.liveLink} target="_blank" rel="noopener noreferrer"><BsGlobe className='mr-1' />Website</a>
                    <a className='py-3 w-full text-center bg-blue-600 font-medium hover:bg-blue-700 duration-300 flex items-center justify-center md:text-lg 2xl:text-2xl 2xl:py-5' href={project?.githubClient} target="_blank" rel="noopener noreferrer"><FaGithub className='mr-1' />Client</a>
                    {
                        project?.githubServer && <a className='py-3 w-full text-center bg-blue-600 font-medium hover:bg-blue-700 duration-300 flex items-center justify-center md:text-lg 2xl:text-2xl 2xl:py-5' href={project?.githubServer} target="_blank" rel="noopener noreferrer"><FaGithub className='mr-1' />Server</a>
                    }
                    
                </div>
                </div>

                
            </div>
        </div>
    );
};

export default ProjectDetails;