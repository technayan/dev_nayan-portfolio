import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <h2 className='text-4xl text-white font-bold mb-14 relative inline-block after:absolute after:content[""] after:w-14 after:h-1 after:bg-blue-600 after:-bottom-2 after:-left-0'>{children}</h2>
    );
};

export default SectionTitle;