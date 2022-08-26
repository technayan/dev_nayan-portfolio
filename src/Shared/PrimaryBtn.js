import React from 'react';
import './PrimayBtn.css';

const PrimaryBtn = ({children}) => {
    return (
        <button className='primary-btn px-6 py-2 mr-5 border-2 border-blue-600 inline-block font-medium text-lg relative z-10 overflow-hidden'>{children}</button>
    );
};

export default PrimaryBtn;