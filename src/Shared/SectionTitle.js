import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <h2 className='text-3xl text-white font-bold mb-14 relative inline-block after:absolute after:content[""] after:w-14 after:h-1 after:bg-blue-600 after:-bottom-1.5 after:-left-0 md:text-4xl md:block md:text-center md:after:left-1/2 md:after:-bottom-3 md:after:-translate-x-1/2 md:mb-20'>{children}</h2>
    );
};

export default SectionTitle;