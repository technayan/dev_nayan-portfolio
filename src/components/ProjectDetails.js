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
            <div className={`project px-2 pb-3 border-2 bg-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-4/5 z-20 text-white border-gray-700 overflow-y-scroll`}>
                <div className="flex justify-end sticky w-full -top-1 right-0 bg-gray-900 z-20">
                    <button onClick={changeStatus} className='my-3 p-1 border-2 rounded-full text-white'>
                        <AiOutlineClose className='text-xl'/>
                    </button>
                </div>
                <img src={project?.imageUrl} alt={project?.name} />
                <h3 className='text-2xl font-bold mt-5 mb-3 text-white relative'>{project?.name}<span className='absolute -top-8 left-0 text-xs font-light bg-blue-600 px-3 py-1 rounded-2xl'>{project?.stack}</span></h3>
                <p className='text-justify'>{project?.description}</p>
                <h4 className='mt-5 mb-1 font-medium text-lg text-blue-400'>Features:</h4>
                <ol className='ml-5'>
                    {
                        project?.features.map(feature => <li key={feature.id} className='list-disc my-2'>{feature.feature}</li>)
                    }
                </ol>
                <h4 className='mt-5 mb-1 font-medium text-lg text-blue-400'>Technologies:</h4>
                <ol className='ml-5'>
                    {
                        project?.technologies.map(technology => <li key={technology.id} className='list-disc my-2'>{technology.name}</li>)
                    }
                </ol>
                <div className="flex flex-col justify-between gap-3 mt-8">
                    <a className='py-2 w-full text-center bg-blue-600 font-medium hover:bg-blue-700 duration-300 flex items-center justify-center' href={project?.liveLink} target="_blank" rel="noopener noreferrer"><BsGlobe className='mr-1' />Website</a>
                    <a className='py-2 w-full text-center bg-blue-600 font-medium hover:bg-blue-700 duration-300 flex items-center justify-center' href={project?.githubClient} target="_blank" rel="noopener noreferrer"><FaGithub className='mr-1' />Client</a>
                    {
                        project?.githubServer && <a className='py-2 w-full text-center bg-blue-600 font-medium hover:bg-blue-700 duration-300 flex items-center justify-center' href={project?.githubServer} target="_blank" rel="noopener noreferrer"><FaGithub className='mr-1' />Server</a>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;