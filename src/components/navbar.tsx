'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md'

const Navbar = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-b-gray-400 border-b relative text-white ">
            <div className='flex justify-between px-14 md:px-28 lg:px-[128px]  text-white md:p-4  py-6'>
                <div className="logo">
                    <Link href={'/'}><h1 className='text-white font-bold text-2xl'>get<span className='text-[#D434FE]'>linked</span></h1></Link>
                </div>


                <div className="hidden md:flex justify-between gap-x-3 w-[65%]">
                    <ul className="flex justify-betwee  w-3/4 justify-evenly text-lg">
                        <li><Link href="/#timeline" className="text-white hover:text-[#D434FE]">Timeline</Link></li>
                        <li><Link href="/#overview" className="text-white hover:text-[#D434FE]">Overview</Link></li>
                        <li><Link href="/#faqs" className="text-white hover:text-[#D434FE]">FAQs</Link></li>
                        <li><Link href="/contact" className="text-white hover:text-[#D434FE]">Contact</Link></li>
                    </ul>
                    <button onClick={() => router.push('/register')} className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF] text-lg px-8 py-1  rounded-sm">Register</button>
                </div>
                <span onClick={toggleMenu}>
                    {
                        !isMenuOpen ? <Image
                            src={"/assets/menu.PNG"}
                            className="flex md:hidden lg:hidden cursor-pointer"
                            width={36}
                            height={10}
                            alt="menu"
                        /> : <span className='text-2xl text-[#150E28] bg-white rounded-full flex md:hidden lg:hidden cursor-pointer'> <MdCancel /></span>
                    }
                </span>

            </div>
            {/* mobile menu */}
            {
                isMenuOpen && <div className="flex md:hidden top-0 right-0 left-0 absolute flex-col p-4 px-14  bg-[#150E28] gap-y-3 w-full h-52 z-20 py-10">
                    <span className='text-2xl text-[#D434FE] rounded-full flex items-end flex-row-reverse md:hidden lg:hidden cursor-pointer ' onClick={toggleMenu}> <MdCancel /></span>
                    <ul className="flex flex-col justify-start w-full text-lg">
                        <li><Link href="/#timeline" className="text-white hover:text-[#D434FE]">Timeline</Link></li>
                        <li><Link href="/#overview" className="text-white hover:text-[#D434FE]">Overview</Link></li>
                        <li><Link href="/#faqs" className="text-white hover:text-[#D434FE]">FAQs</Link></li>
                        <li><Link href="/contact" className="text-white hover:text-[#D434FE]">Contact</Link></li>
                    </ul>
                    <button onClick={() => router.push('/register')} className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF] text-lg px-8 py-1  rounded-sm">Register</button>
                </div>
            }


        </nav>
    );
};

export default Navbar;
