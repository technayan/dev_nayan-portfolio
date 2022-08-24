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
            <img src={project?.imageUrl} alt={project?.name} />
            <div className="overlay flex flex-col justify-center absolute bg-black w-full h-full top-0 px-10 left-0 opacity-0 hover:opacity-100 duration-300">
                <h3 className='text-xl font-bold text-white text-center'>{project?.name}</h3>
                <p className='text-center text-sm mt-1 mb-4'>{project?.description.slice(0,50)}...</p>
                <div className="flex justify-between gap-3">
                    <a className='py-1 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium flex items-center justify-center' href={project?.liveLink} target="_blank" rel="noopener noreferrer">Website</a>
                    <button onClick={change} className='py-1 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium'>Details</button>
                </div>  
            </div>

            <ProjectDetails project={project} status={popup} setStatus={setPopup} />
            {/* <h3 className='text-2xl font-bold my-4 text-white relative'>{project?.name}<span className='absolute top-1/2 -translate-y-1/2 right-0 text-xs font-light bg-blue-600 px-3 py-1 rounded-2xl'>{project?.stack}</span></h3>
            <p className='text-justify'>{project?.description}</p>
            <div className="flex justify-between gap-3 mt-6 mb-1">
                <a className='py-2 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium flex items-center justify-center' href={project?.liveLink} target="_blank" rel="noopener noreferrer">Website</a>
                <button onClick={change} className='py-2 w-full text-center bg-blue-600 hover:bg-blue-700 duration-300 font-medium'>Details</button>
            </div>
            <ProjectDetails project={project} status={popup} setStatus={setPopup} /> */}
            
        </div>
    );
};

export default SingleProject;