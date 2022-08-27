import React from 'react';
import { Link } from 'react-scroll';
import './PrimayBtn.css';

const PrimaryBtn = ({children}) => {
    return (
        <Link to='Contact' smooth duration={500} className='primary-btn cursor-pointer text-white px-6 py-2 border-2 border-blue-600 inline-block font-medium text-lg relative z-10 overflow-hidden lg:px-8 2xl:text-2xl 2xl:px-10 2xl:py-4'>{children}</Link>
    );
};

export default PrimaryBtn;