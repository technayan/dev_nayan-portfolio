import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const SingleProject = ({project}) => {
    const [popup, setPopup] = useState(false);
    const change = () => {
        setPopup(true);
    }
    console.log(popup)
    return (
        <div className='project border-2 text-white border-gray-700 relative'>
            {/* Project Image */}
            <img src={project?.imageUrl} alt={project?.name} />

            {/* Overlay */}
            <div className="overlay flex flex-col justify-center absolute bg-black w-full h-full top-0 px-10 left-0 opacity-0 hover:opacity-100 duration-300">
                {/* Project Title */}
                <h3 className='text-xl font-bold text-white text-center md:text-2xl'>{project?.name}</h3>
                
                {/* Project Description */}
                <p className='text-center text-sm mt-1 mb-4 md:text-base'>{project?.description.slice(0,50)}...</p>
                
                {/* Project Action Buttons */}
                <div className="flex justify-between gap-3">
                    <a className='py-1 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium flex items-center justify-center md:py-2' href={project?.liveLink} target="_blank" rel="noopener noreferrer">Website</a>
                    <button onClick={change} className='py-1 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium md:py-2'>Details</button>
                </div>  
            </div>
            <ProjectDetails project={project} status={popup} setStatus={setPopup} />
        </div>
    );
};

export default SingleProject;