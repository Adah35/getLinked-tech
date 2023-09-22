'use client'
import Image from "next/image";
import Timer from "./timer";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";


export default function Hero() {
    const router = useRouter()
    return (
        <div className="h-[100vh]">

            <section className="flex  flex-col lg:flex-row relative border-b-gray-400 border-b  items-center w-full justify-between lg:px-32 px-10">

                <div className="relative  py-12">
                    <Image
                        src={"/assets/star.PNG"}
                        className=" absolute  top-0"
                        width={35}
                        height={35}
                        alt="logo"
                    /> <Image
                        src={"/assets/starg.PNG"}
                        className=" absolute right-0 top-0"
                        width={20}
                        height={20}
                        alt="logo"
                    /> <Image
                        src={"/assets/starg.PNG"}
                        className=" absolute right-32 bottom-0"
                        width={20}
                        height={20}
                        alt="logo"
                    />
                    <Image
                        src={"/assets/bob.PNG"}
                        className=" absolute right-20 top-0"
                        width={55}
                        height={55}
                        alt="logo"
                    />
                    <h1 className="font-bold text-4xl lg:text-7xl mb-4 ">getLinked Tech </h1>

                    <p className=" font-bold text-4xl lg:text-7xl mb-4  whitespace-nowrap flex">Hackathon <span className="text-[#D434FE] ">1.0

                    </span>
                        <Image
                            src={"/assets/chain.PNG"}
                            className=""
                            width={75}
                            height={75}
                            alt="logo"
                        />
                        <Image
                            src={"/assets/fire.PNG"}
                            className=""
                            width={75}
                            height={75}
                            alt="logo"
                        />
                    </p>
                    <button onClick={() => router.push('/register')} className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF] my-3 text-lg px-8 py-1 rounded-sm">Register</button>
                    <Timer />
                </div>
                <div className="relative">
                    <p className="font-bold text-2xl italic">Igniting a Revolution in HR Innovation</p>
                    <Image
                        src={"/assets/man.PNG"}
                        className=""
                        width={550}
                        height={500}
                        alt="logo"
                    />
                    <Image
                        src={"/assets/Image1.PNG"}
                        className="hero-image absolute top-0 left-14 "
                        width={450}
                        height={500}
                        alt="logo"
                    />
                </div>
            </section>
        </div>

    )
}
