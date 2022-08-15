import React, { useState } from 'react';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState('');

    const hamburger = () => {
        setIsOpen(isOpen ? '' : 'true');
    }

    const navLink = [
        {id : 1, name: 'Home'},
        {id : 2, name: 'About'},
        {id : 3, name: 'Skills'},
        {id : 4, name: 'Projects'},
        {id : 5, name: 'Contact'}
    ]

    return (
        <nav className="bg-[#252525] p-3 fixed top-0 w-full z-50">
            <div className="container w-11/12 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logo">
                        <a href='#' className='font-bold text-4xl font-signature text-gray-300 hover:text-[#0173f5] duration-300'>dev_nayan</a>
                    </div>
                
                    <ul className={`menu text-gray-400 bg-[#252525] lg:bg-transparent top-0 ${isOpen ? 'left-0' : 'left-full'} absolute lg:static h-screen lg:h-auto w-screen lg:w-auto flex flex-col lg:flex-row justify-center lg:justify-end -z-10 lg:z-0 duration-500`}>
                        {
                            navLink.map(link => (
                                <li className='text-xl lg:text-base text-center my-3 lg:ml-8 cursor-pointer hover:text-[#0173f5] hover:translate-x-1 lg:hover:translate-x-0 font-medium duration-300'> <a href="js:void">{link.name}</a></li>
                            ))
                        }
                        <li className="social-links mt-10 lg:hidden">
                            <ul className='flex justify-center'>
                                <li><a className='inline-block mx-5' href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className='text-gray-400 text-2xl hover:text-[#0173f5] duration-300 hover:-translate-y-1'/></a></li>
                                <li><a className='inline-block mx-5' href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-gray-400 text-2xl hover:text-[#0173f5] duration-300 hover:-translate-y-1'/></a></li>
                                <li><a className='inline-block mx-5' href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-gray-400 text-2xl hover:text-[#0173f5] duration-300 hover:-translate-y-1'/></a></li>
                                <li><a className='inline-block mx-5' href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaGithub className='text-gray-400 text-2xl hover:text-[#0173f5] duration-300 hover:-translate-y-1'/></a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className='cursor-pointer lg:hidden' onClick={hamburger}>
                        <div className= {`bg-white h-[2px] my-3 w-8 duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className= {`bg-white h-[2px] my-3 w-8 duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </div>
                </div>
            
                
            </div>
        </nav>
    );
};

export default Navbar;