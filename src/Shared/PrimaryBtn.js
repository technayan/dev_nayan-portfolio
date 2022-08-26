import React from 'react';
import './PrimayBtn.css';

const PrimaryBtn = ({children}) => {
    return (
        <button className='primary-btn text-white px-6 py-2 border-2 border-blue-600 inline-block font-medium text-lg relative z-10 overflow-hidden lg:px-8'>{children}</button>
    );
};

export default PrimaryBtn;