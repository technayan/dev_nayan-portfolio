import React, { useState } from 'react';

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
        <nav className="bg-black p-3 fixed top-0 w-full z-50">
            <div className="container px-1 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logo">
                        <a href='#' className='font-bold text-4xl font-signature text-white hover:text-blue-600 duration-300'>Nayan</a>
                    </div>
                    <ul className={`menu text-white bg-gradient-to-b from-black to-gray-800 lg:bg-transparent top-0 ${isOpen ? 'left-0' : 'left-[110%]'} absolute lg:static h-screen w-screen lg:w-auto flex flex-col lg:flex-row justify-center lg:justify-end -z-10 lg:z-0 duration-700 drop-shadow-xl`}>
                        {
                            navLink.map(link => (
                                
                                <li key={link.id} className='text-2xl lg:text-base text-center my-3 lg:ml-8 cursor-pointer hover:text-blue-600 hover:translate-x-1 lg:hover:translate-x-0 font-medium duration-300'><a href="js:void">{link.name}</a></li>
                            ))
                        }
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