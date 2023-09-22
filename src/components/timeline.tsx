import React from 'react'



export default function Timeline() {
    return (
        <section className="flex flex-col  items-center w-full justify-center">
            <h1 className='font-bold text-2xl'>Timeline</h1>
            <p className='mb-4'>Here is the breakdown of the time we anticipate
                using for the upcoming event.</p>
            <div className='content'>
                <ul className='timeline relative w-3/4 mx-auto'>
                    <div className='flex  lg:justify-between  gap-x-3 items-center'>
                        <li className='items-start w-96 font-medium '>
                            <span className=' text-[#D434FE] font-semibold text-lg'>Hackathon Announcement</span>
                            <p>The getlinked tech hackathon 1.0 is formally announced
                                to the general public and teams begin to get ready to register</p>
                        </li>
                        <span className='w-10 h-8 circle block text-center text-xl z-10 rounded-full bg-[#D434FE] text-white'> 1</span>
                        <li className='text-[#D434FE] w-96 font-semibold text-lg'>
                            <span>November 18, 2023</span>
                        </li>
                    </div>
                    <div className='flex justify-between  gap-x-3 items-center'>
                        <li className='text-[#D434FE] w-96 font-semibold text-lg'>
                            <p>November 18, 2023</p>
                        </li>
                        <span className='w-10 h-8 circle block text-center text-xl z-10 rounded-full bg-[#D434FE] text-white'> 2</span>
                        <li className='items-start w-96 font-medium  '>
                            <span className='text-[#D434FE] font-semibold text-lg'>Teams Registration begins</span>

                            <p>Interested teams can now show their interest in the
                                getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </li>
                    </div>
                    <div className='flex justify-between  gap-x-3 items-center'>
                        <li className='items-start w-96 font-medium '>
                            <span className='text-[#D434FE] font-semibold text-lg'>Teams Registration ends</span>

                            <p>Interested Participants are no longer Allowed to
                                register</p>
                        </li>
                        <span className='w-10 h-8 circle block text-center text-xl z-10 rounded-full bg-[#D434FE] text-white'> 3</span>
                        <li className='text-[#D434FE] w-96 font-semibold text-lg'>
                            <p>November 18, 2023</p>
                        </li>
                    </div>
                    <div className='flex justify-between  gap-x-3 items-center'>
                        <li className='text-[#D434FE] w-96 font-semibold text-lg'>
                            <p>November 18, 2023</p>
                        </li>
                        <span className='w-10 h-8 circle block text-center text-xl z-10 rounded-full bg-[#D434FE] text-white'> 4</span>
                        <li className='items-start w-96 font-medium '>
                            <span className='text-[#D434FE] font-semibold text-lg'>
                                Announcement of the accepted teams
                                and ideas</span>

                            <p>All teams whom idea has been accepted into getlinked tech
                                hackathon 1.0 2023 are formally announced</p>
                        </li>
                    </div>
                    <div className='flex justify-between  gap-x-3 items-center'>
                        <li className='items-start w-96 font-medium '>
                            <span className='text-[#D434FE] font-semibold text-lg'>Getlinked Hackathon 1.0 Offically Begins</span>
                            <p>
                                Accepted teams can now proceed to build their
                                ground breaking skill driven solutions</p>
                        </li>
                        <span className='w-10 h-8 circle block text-center text-xl z-10 rounded-full bg-[#D434FE] text-white'> 5</span>
                        <li className='text-[#D434FE] w-96 font-semibold text-lg'>
                            <p>November 18, 2023</p>
                        </li>
                    </div>
                    <div className='flex justify-between  gap-x-3 items-center'>
                        <li className='text-[#D434FE] w-96 font-semibold text-lg'>
                            <p>November 18, 2023</p>
                        </li>
                        <span className='w-10 h-8 circle block text-center text-xl z-10 rounded-full bg-[#D434FE] text-white'> 6</span>
                        <li className='items-start w-96 font-medium '>
                            <span className='text-[#D434FE] font-semibold text-lg'>Demo Day</span>
                            <p>
                                Teams get the opportunity to pitch their projects to judges.
                                The winner of the hackathon will also be announced on
                                this day</p>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    )
}

