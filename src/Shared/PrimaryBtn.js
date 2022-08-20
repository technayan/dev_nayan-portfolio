import React from 'react';
import './PrimayBtn.css';

const PrimaryBtn = ({children, link}) => {
    return (
        <a href='https://drive.google.com/file/d/1PPkRczAxVRmK2mnZiqMkzRN_oej3BapG/view?usp=sharing' target='_blank' className='primary-btn px-8 py-2 mr-5 border-2 border-blue-600 inline-block mt-10 font-medium text-lg relative z-10 overflow-hidden'>{children}</a>
    );
};

export default PrimaryBtn;