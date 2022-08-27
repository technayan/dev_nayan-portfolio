import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hamburger = () => {
        setIsOpen(!isOpen);
    }

    const navLink = [
        {id : 1, link: 'Home'},
        {id : 2, link: 'About'},
        {id : 3, link: 'Skills'},
        {id : 4, link: 'Projects'},
        {id : 5, link: 'Contact'}
    ]

    return (
        <nav className="bg-black py-3 fixed top-0 w-full z-50">
            <div className="container px-4 mx-auto md:px-8">
                <div className="flex items-center justify-between">
                    <div className="logo">
                        <a href='js:void' className='font-bold text-4xl font-signature text-white hover:text-blue-600 duration-300'>Nayan</a>
                    </div>
                    <ul className={`menu text-white bg-gradient-to-b from-black to-gray-800 top-0 ${isOpen ? 'left-0 lg:left-2/3 lg:w-1/3' : 'left-[110%]'} absolute h-screen w-screen flex flex-col justify-center -z-10 duration-700 drop-shadow-xl lg:drop-shadow-2xl`}>
                        {
                            navLink.map(({id, link}) => (
                                <li key={id} onClick={hamburger} className='text-2xl text-center my-3 cursor-pointer hover:text-blue-600 font-medium duration-300 xl:my-4 2xl:text-4xl'><Link to={link} smooth duration={700} offset={-15} onClick={hamburger} className="block">{link}</Link></li>
                            ))
                        }
                    </ul>
                    <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className= {`bg-white h-[2px] my-3 w-8 duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className= {`bg-white h-[2px] my-3 w-8 duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;