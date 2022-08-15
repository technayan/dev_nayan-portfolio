import React from 'react';
import './PrimayBtn.css';

const PrimaryBtn = ({children}) => {
    return (
        <a href='/resume' className='primary-btn px-7 py-2 mr-5 border-2 border-blue-600 inline-block mt-10 font-medium text-lg relative z-10 overflow-hidden'>{children}</a>
    );
};

export default PrimaryBtn;