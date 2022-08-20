import React from 'react';

const SingleProject = ({project}) => {
    return (
        <div className='project p-3 border-2 text-white border-gray-700 rounded-md'>
            <img src={project?.imageUrl} alt={project?.name} />
            <h3 className='text-2xl font-bold my-3 text-white'>{project?.name}</h3>
            <p className='text-justify'>{project.description}</p>
            <div className="flex justify-between gap-3 mt-6">
                <a className='py-2 w-full text-center bg-blue-600 font-medium flex items-center justify-center' href={project?.liveLink} target="_blank" rel="noopener noreferrer">Preview</a>
                <button className='py-2 w-full text-center bg-blue-600 font-medium'>Details</button>
            </div>
        </div>
    );
};

export default SingleProject;