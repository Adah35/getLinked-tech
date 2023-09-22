import Image from "next/image"
import Gradient from "./gradient"

export default function Rules() {
    return (
        <div className="relative">
            <Gradient />

            <section className="relative flex flex-col lg:flex-row  items-center w-full justify-between border-b-gray-400 border-b  lg:px-32 px-10">
                <div className="w-full md:w-1/2  relative">
                    <Image
                        src={"/assets/star2.PNG"}
                        className="absolute left-52 top-0"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <Image
                        src={"/assets/star.PNG"}
                        className="absolute right-0 bottom-0"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <h1 className="font-bold text-4xl lg:text-4xl whitespace-nowrap">Rules and</h1>
                    <h1 className="font-bold text-4xl lg:text-4xl whitespace-nowrap text-[#D434FE] mb-4">
                        Guidelines</h1>
                    <p className="leading-6 text-sm">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                </div>
                <div className="w-full md:w-1/2  flex justify-end">
                    <Image
                        src={"/assets/7450159 1.PNG"}
                        className=""
                        width={390}
                        height={377}
                        alt="logo"
                    />
                </div>
            </section>
        </div>
    )
}
