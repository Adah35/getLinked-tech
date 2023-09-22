import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

export default function Policy() {
    return (
        <section className="flex flex-col lg:flex-row  items-center w-full justify-between border-b-gray-400 border-b  lg:px-32 px-10">
            <div className='w-full md:w-1/2'>
                <h1 className='font-bold text-2xl'>Privacy Policy and <br />
                    <span className='text-[#D434FE]'>Terms</span></h1>
                <p className='leading-4 mb-6'>Last updated on September 12, 2023</p>
                <p className='leading-4 mb-6'>Below are our privacy & policy, which outline a lot of goodies.
                    its our aim to always take of our participant</p>
                <div className=' bg-transparent -z-10 filter bl border border-[#D434FE] p-6'>
                    <p className='leading-6'>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose,
                        and safeguard your data when you participate in our tech
                        hackathon event. By participating in our event, you consent
                        to the practices described in this policy.
                    </p>
                    <h2 className='text-[#D434F font-semibold'>Licensing Policy</h2>
                    <p>Here are terms of our Standard License:</p>
                    <ul>
                        <li className=' leading-6 flex items-center gap-x-3'><span><FaCheckCircle className='text-green-500 rounded-full bg-white' /></span> The Standard License grants you a non-exclusive right to
                            navigate and register for our event</li>
                        <li className=' leading-6 flex items-center gap-x-3'><span><FaCheckCircle className='text-green-500 rounded-full bg-white' /></span>You are licensed to use the item available at any free source
                            sites, for your project developement</li>
                        <button className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF] text-lg px-4 py-2 rounded-sm">Read More</button>

                    </ul>
                </div>
            </div>
            <div className='relative w-full md:w-1/2'>
                <Image
                    src={"/assets/privacy.PNG"}
                    className=""
                    width={600}
                    height={600}
                    alt="logo"
                />
                <Image
                    src={"/assets/Vector.PNG"}
                    className="absolute top-0 right-0"
                    width={400}
                    height={400}
                    alt="logo"
                />

            </div>
        </section>

    )
}
