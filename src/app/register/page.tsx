import React from 'react'
import RegistrationForm from './component/registrationForm'
import Image from 'next/image'
import Modal from './component/successModal'

export default function Register() {
    return (
        <div className="flex container mx-auto  flex-col lg:flex-row relative items-center w-full justify-between lg:px-32 px-10 h-screen py-20">
            <div className=' w-full md:w-1/2 relative p-3 mg:p-6'>
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute left-0 top-0"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <Image
                    src={"/assets/starg.PNG"}
                    className="absolute left-10 bottom-0"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute right-20 bottom-0"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <Image
                    src={"/assets/mantab.PNG"}
                    className=""
                    width={477}
                    height={477}
                    alt="logo"
                />

            </div>
            <div className='w-full md:w-1/2 relative  bg-opacity-10 backdrop-blur-lg  drop-shadow-lg bg-white rounded-xl p-4'>
                <Image
                    src={"/assets/star2.PNG"}
                    className="absolute right-0 top-0"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <Image
                    src={"/assets/star.PNG"}
                    className="absolute right-10 bottom-0"
                    width={10}
                    height={10}
                    alt="logo"
                />
                <h1 className='font-bold text-[#D434FE] text-2xl mt-3 ml-2'>Register</h1>
                <p className='my-2 ml-2 text-sm'>Be part of this movement!</p>
                <p className='font-semibold text-xl ml-2'>CREATE YOUR ACCOUNT</p>
                <RegistrationForm />

            </div>

        </div>
    )
}
