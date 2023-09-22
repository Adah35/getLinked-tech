import Image from "next/image";

export default function Intro() {
    return (
        <section className="flex flex-col lg:flex-row  relative items-center w-full justify-between border-b-gray-400 border-b  lg:px-32 px-10 py-28 lg:py-10">
            <div className="w-full md:w-1/2  relative">
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute left-0 top-40"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <Image
                    src={"/assets/arrow.PNG"}
                    className="absolute right-20 bottom-0"
                    width={80}
                    height={80}
                    alt="logo"
                />
                <Image
                    src={"/assets/Theidea.PNG"}
                    className=""
                    width={390}
                    height={377}
                    alt="logo"
                />
            </div>
            <div className="w-full md:w-1/2  relative">
                <Image
                    src={"/assets/starpink.PNG"}
                    className="absolute right-0 top-0"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <h1 className="font-bold text-4xl lg:text-2xl whitespace-nowrap">Introduction to getlinked </h1>
                <h1 className="font-bold text-4xl lg:text-2xl whitespace-nowrap text-[#D434FE] mb-4">
                    tech Hackathon 1.0</h1>
                <p className="leading-6 text-sm">
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>

        </section>
    )
}
