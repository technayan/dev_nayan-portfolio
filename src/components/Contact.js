import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className='contact-section py-14 bg-gray-800 md:py-20'>
            <div className="container px-4 mx-auto md:px-10">
                <SectionTitle children={'Contact'} />
                <div className="contact-info text-white">
                    <p className='flex items-center text-lg mb-5'><FaMapMarkerAlt className='text-2xl mr-3' />Tongi, Gazipur, Dhaka-1710, BD</p>
                    <p className='flex items-center text-lg my-5'><FaPhoneAlt className='text-2xl mr-3' /><a href="tel:+8801944516122" className='hover:text-blue-600 duration-300'>+8801944516122</a></p>
                    <p className='flex items-center text-lg my-5'><FaEnvelope className='text-2xl mr-3' /><a href="mailto:developer.nayan24@gmail.com" className='hover:text-blue-600 duration-300'>developer.nayan24@gmail.com</a></p>
                    <ul className='flex justify-start my-8'>
                        <li><a className='inline-block mr-3' href="https://www.facebook.com/dev.nayan20" target="_blank" rel="noopener noreferrer"><FaFacebookF className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                        <li><a className='inline-block mx-3' href="https://www.linkedin.com/in/md-abdullah-nayan-711884220/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                        <li><a className='inline-block mx-3' href="https://twitter.com/dev_nayan1" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                        <li><a className='inline-block mx-3' href="https://github.com/technayan" target="_blank" rel="noopener noreferrer"><FaGithub className='text-white text-3xl hover:text-blue-600 duration-300 hover:-translate-y-1'/></a></li>
                    </ul>
                </div>
                <form action="https://getform.io/f/4d45c317-6a77-4990-841c-e42cb31c347d" method="POST">
                    <input className="w-full my-2 p-3 bg-transparent border-2 border-gray-400 text-white focus:outline-none" type="text" name="name" placeholder='Enter your name' required/>
                    <input className="w-full my-2 p-3 bg-transparent border-2 border-gray-400 text-white focus:outline-none" type="email" name="email" placeholder='Enter your email' required/>
                    <textarea className="w-full my-2 p-3 bg-transparent border-2 border-gray-400 text-white focus:outline-none" name="message" cols="30" rows="5" placeholder='Your message' required></textarea>
                    <input type="submit" value="Message" className='px-8 py-2 border-2 border-blue-600 mt-3 mx-auto block font-medium text-lg text-white hover:bg-blue-600 duration-300 cursor-pointer'/>
                </form>
            </div>
        </section>
    );
};

export default Contact;