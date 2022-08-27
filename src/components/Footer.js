import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='py-10 bg-black'>
            <div className="container px-4 mx-auto md:px-10">
                <p className='text-white text-center 2xl:text-2xl'>Copyright &copy; {year} | Developed by Nayan.</p>
            </div>
        </footer>
    );
};

export default Footer;