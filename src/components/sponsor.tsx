import Image from 'next/image'
import React from 'react'

export default function Sponsor() {
    return (
        <section className="flex flex-col  items-center w-full justify-center border-b-gray-400 border-b  lg:px-32 px-10">
            <h1 className='font-bold text-2xl'>Partners and Sponsors<Image
                src={"/assets/arrow.PNG"}
                className="absolute right-20 bottom-0"
                width={80}
                height={80}
                alt="logo"
            /></h1>
            <p>Getlinked Hackathon 1.0 is honored to have the following major
                companies as its partners and sponsors</p>

            <Image
                src={"/assets/sponsor.PNG"}
                className=" my-12"
                width={890}
                height={477}
                alt="logo"
            />
        </section>
    )
}
