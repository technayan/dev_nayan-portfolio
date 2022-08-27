import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const SingleProject = ({project}) => {
    const [popup, setPopup] = useState(false);
    const change = () => {
        setPopup(true);
    }
    return (
        <div className='project border-2 text-white border-gray-700 relative'>
            {/* Project Image */}
            <img src={project?.imageUrl} alt={project?.name} />

            {/* Overlay */}
            <div className="overlay flex flex-col justify-center absolute bg-black/90 w-full h-full top-0 px-10 left-0 opacity-0 hover:opacity-100 duration-300">
                {/* Project Title */}
                <h3 className='text-xl font-bold text-white text-center mb-5 md:text-3xl lg:text-2xl lg:mb-2 2xl:text-4xl 2xl:mb-6'>{project?.name}</h3>
                
                {/* Project Description */}
                <p className='text-center text-sm mt-1 mb-8 w-3/4 mx-auto hidden sm:block md:text-base lg:mb-5 lg:w-full 2xl:text-2xl 2xl:mb-8'>{project?.description.slice(0,80)}...</p>
                
                {/* Project Action Buttons */}
                <div className="flex justify-between md:justify-center gap-3">
                    <a className='py-1 px-8 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium md:py-2 md:w-1/4 lg:w-2/3 2xl:text-2xl 2xl:py-3' href={project?.liveLink} target="_blank" rel="noopener noreferrer">Website</a>
                    <button onClick={change} className='py-1 px-8 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium md:py-2 md:w-1/4 lg:w-2/3 2xl:text-2xl 2xl:py-3'>Details</button>
                </div>  
            </div>
            <ProjectDetails project={project} status={popup} setStatus={setPopup} />
        </div>
    );
};

export default SingleProject;