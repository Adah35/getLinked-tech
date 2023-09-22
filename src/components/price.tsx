import Image from 'next/image'
import React from 'react'

export default function Price() {
    return (
        <section className="flex flex-col lg:flex-row  items-center w-full justify-between border-b-gray-400 border-b  lg:px-32 px-10" >
            <div className="w-full md:w-1/2 relative ">
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute left-0 top-0"
                    width={30}
                    height={30}
                    alt="logo"
                />


                <Image
                    src={"/assets/cup.PNG"}
                    className=""
                    width={390}
                    height={377}
                    alt="logo"
                />
            </div>
            <div className="w-full md:w-1/2 relative">
                <Image
                    src={"/assets/star.PNG"}
                    className="absolute right-20 bottom-0"
                    width={40}
                    height={40}
                    alt="logo"
                />
                <Image
                    src={"/assets/star2.PNG"}
                    className="absolute right-20 top-0"
                    width={20}
                    height={20}
                    alt="logo"
                />
                <h1 className="font-bold text-4xl  whitespace-nowrap">Prizes and
                </h1>
                <h1 className="font-bold text-4xl  whitespace-nowrap text-[#D434FE] mb-4">Rewards</h1>
                <p>Highlight of the prizes or rewards for winners and
                    for participants.
                </p>
                <Image
                    src={"/assets/Rewards.PNG"}
                    className="my-10"
                    width={490}
                    height={477}
                    alt="logo"
                />
            </div>

        </section >
    )
}
