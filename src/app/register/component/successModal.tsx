'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Modal({ isSuccess }: { isSuccess: boolean }) {
    const [open, setOpen] = useState(isSuccess)
    return (
        open ?
            <div className='absolute inset-0 flex justify-center items-center bg-opacity-10 backdrop-blur-md bg-black'>
                <div className=' border border-[#D434FE] p-6 flex flex-col gap-y-3 items-center justify-center'>
                    <Image
                        src={"/assets/congratulation.PNG"}
                        className=""
                        width={477}
                        height={477}
                        alt="logo"
                    />
                    <h1 className='text-center text-2xl'>Congratulations <br />
                        you have successfully Registered!</h1>
                    <p className='text-sm '>Yes, it was easy and you did it!<br />
                        check your mail box for next step <span className=' float-right ml-2'>
                            <Image
                                src={"/assets/emoji.PNG"}
                                className=""
                                width={20}
                                height={20}
                                alt="logo"
                            />
                        </span></p>
                    <button
                        onClick={() => setOpen(false)}
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF]  text-white px-4 py-2 rounded-lg  focus:outline-none"
                    >
                        Back
                    </button>
                </div>
            </div> : null
    )
}
