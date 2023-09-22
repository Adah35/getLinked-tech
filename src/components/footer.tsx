import React from 'react'
import { RiInstagramLine, RiTwitterXLine, RiFacebookLine, RiLinkedinLine, RiPhoneFill } from 'react-icons/ri'
import { FaLocationPin } from 'react-icons/fa6'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='px-10 lg:px-32 pt-20'>
            <div className='flex flex-col lg:flex-row relative justify-between gap-3 items-start mb-3'>
                <Image
                    src={"/assets/star.PNG"}
                    className="absolute left-0 top-0"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute right-[50%] bottom-0"
                    width={10}
                    height={10}
                    alt="logo"
                />
                <Image
                    src={"/assets/starg.PNG"}
                    className="absolute top-0 right-[20%]"
                    width={10}
                    height={10}
                    alt="logo"
                />
                <Image
                    src={"/assets/star.PNG"}
                    className="absolute right-0 bottom-20"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <div className='py-3 px-3 gap-y-3 w-full lg:w-2/4'>
                    <h1 className='text-white font-bold text-2xl'>get<span className='text-[#D434FE]'>linked</span></h1>
                    <p className='leading-6 pt-4 text-sm'>Getlinked Tech Hackathon is a technology innovation program
                        established by a group of organizations with the aim of showcasing
                        young and talented individuals in the field of technology</p>

                    <p className='mt-6 flex gap-x-3'>Terms of Use   <span className='w-[2px] h-6 bg-[#D434FE] block'></span>    Privacy Policy</p>
                </div>
                <div className='flex flex-col w-full lg:w-1/4 content-center px-3 justify-center py-3 gap-y-3'>
                    <p className='text-[#D434FE]'>Useful Links</p>
                    <ul className="flex flex-col gap-y-1 content-center  w-3/4 justify-center text-sm">
                        <li><a href="#" className="text-white hover:text-[#D434FE]">Timeline</a></li>
                        <li><a href="#" className="text-white hover:text-[#D434FE]">Overview</a></li>
                        <li><a href="#" className="text-white hover:text-[#D434FE]">FAQs</a></li>
                        <li><a href="#" className="text-white hover:text-[#D434FE]">Contact</a></li>
                    </ul>

                    <div className='flex items-center gap-2 text-white text-xl'>
                        <p className='text-[#D434FE]'>follow us</p>
                        <RiInstagramLine />
                        <RiTwitterXLine />
                        <RiFacebookLine />
                        <RiLinkedinLine />
                    </div>
                </div>
                <div className='flex flex-col py-3 px-3 gap-y-3 w-full lg:w-1/4 text-sm'>
                    <p className='text-[#D434FE]'>Contact Us</p>
                    <span className='flex items-center gap-2'><RiPhoneFill /> +234 679 81819</span>
                    <span className='flex items-center gap-2'><FaLocationPin />27,Alara Street <br />
                        Yaba 100012
                        Lagos State</span>
                </div>
            </div>
            <p className='text-center'>All rights reserved. © getlinked Ltd.</p>
        </footer>
    )
}
