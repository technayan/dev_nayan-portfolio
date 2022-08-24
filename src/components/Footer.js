import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='py-10 bg-black'>
            <p className='text-white text-center'>Copyright &copy; {year} | Developed by Nayan.</p>
        </footer>
    );
};

export default Footer;