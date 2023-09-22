'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { RiInstagramLine, RiTwitterXLine, RiFacebookLine, RiLinkedinLine } from 'react-icons/ri'
export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        message: '',
    });
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, seterror] = useState('')
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const handleSubmit = async (e: any) => {
        seterror('')
        e.preventDefault();
        if (!emailRegex.test(email)) {
            seterror('Invalid email address')
        }
        if (!name || !email || !message) {
            seterror('All fields are required')
            return;
        }
        e.preventDefault();
        const res = await fetch(' https://backend.getlinked.ai/hackathon/contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name: name, email, message })
        })
        if (!res.ok) {
            seterror('An error occurred')
        }
        if (res.ok) {
            setEmail('')
            setMessage('')
            setName('')
        }
    };

    return (
        <div className="flex container mx-auto  flex-col lg:flex-row relative items-center w-full justify-between lg:px-32 px-10 h-screen py-20">
            <div className=' w-full md:w-1/2 relative p-6'>
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute left-0 top-0"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <h1 className='text-[#D434FE] text-2xl font-bold'>Get in touch</h1>
                <ul className='flex flex-col '>
                    <li className='w-60 py-2'>Contact
                        Information</li>
                    <li className='w-60 py-2'>27,Alara Street
                        Yaba 100012
                        Lagos State</li>
                    <li className='w-60 py-2'>Call Us : 07067981819</li>
                    <li className='w-60 py-2'>we are open from Monday-Friday
                        08:00am - 05:00pm</li>
                </ul>
                <p className='text-[#D434FE]'>Share on</p>
                <div className='flex gap-2 text-white text-xl'>
                    <RiInstagramLine />
                    <RiTwitterXLine />
                    <RiFacebookLine />
                    <RiLinkedinLine />
                </div>
            </div>
            <div className=' w-full md:w-1/2 relative px-4 py-4 bg-opacity-10 backdrop-blur-lg  drop-shadow-lg bg-white rounded-xl'>
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute left-0 top-40"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <Image
                    src={"/assets/starg.PNG"}
                    className="absolute right-0 top-0"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <Image
                    src={"/assets/star.PNG"}
                    className="absolute right-0 bottom-0"
                    width={40}
                    height={40}
                    alt="logo"
                />
                <p className='text-[#D434FE] my-3 leading-6 w-60'>Questions or need assistance?
                    Let us know  about it!</p>
                <form onSubmit={handleSubmit} className="w-full   px-4 py-9 rounded-lg">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder='First Name'
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D434FE]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none focus:border-[#D434FE]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}

                            placeholder='Message'
                            className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-lg focus:outline-none focus:border-[#D434FE]"
                            rows={4}
                            required
                        />
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <div className="text-center">

                        <button className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF] text-lg px-8 py-1  rounded-sm">Submit  </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

