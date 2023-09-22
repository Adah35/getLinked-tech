import Image from "next/image"
import Gradient from "./gradient"

export default function Criteria() {
    return (
        <div className="relative">

            <section className="flex flex-col lg:flex-row relative items-center w-full justify-between border-b-gray-400 border-b  lg:px-32 px-10">
                <div className="w-full md:w-1/2  relative">
                    <Image
                        src={"/assets/starpink.PNG"}
                        className="absolute left-0  top-0"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <Image
                        src={"/assets/star2.PNG"}
                        className="absolute left-52 bottom-20"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <Image
                        src={"/assets/star.PNG"}
                        className="absolute right-20 bottom-0"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <Image
                        src={"/assets/MANWOMAN.PNG"}
                        className=""
                        width={490}
                        height={477}
                        alt="logo"
                    />
                </div>
                <div className="w-full md:w-1/2 ">
                    <h1 className="font-bold text-4xl lg:text-4xl whitespace-nowrap">Judging Criteria </h1>
                    <h1 className="font-bold text-4xl lg:text-4xl whitespace-nowrap text-[#D434FE] mb-4"> Key attributes</h1>
                    <p className="leading-6 mb-2"><span className="text-[#D434FE] font-semibold">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world problem in a novel
                        way or introduces innovative features.</p>
                    <p className="leading-6 mb-2"><span className="text-[#D434FE] font-semibold">Functionality:</span> Assess how well the solution works. Does it perform its
                        intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.</p>
                    <p className="leading-6 mb-2"><span className="text-[#D434FE] font-semibold">Impact and Relevance:</span> Determine the potential impact of the solution
                        in the real world. Does it address a significant problem, and is it relevant
                        to the target audience? Judges would assess the potential social,
                        economic, or environmental benefits.</p>
                    <p className="leading-6 mb-2"><span className="text-[#D434FE] font-semibold">Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                        Judges would consider the complexity of the code, the use of advanced
                        technologies or algorithms, and the scalability of the solution.</p>
                    <p className="leading-6 mb-2"><span className="text-[#D434FE] font-semibold">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                        to the rules and guidelines of the hackathon, including deadlines, use of
                        specific technologies or APIs, and any other competition-specific requirements.</p>
                    <button className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF] my-3 text-lg px-8 py-1 rounded-sm">Read More</button>
                </div>
            </section>
            <Gradient />

        </div>
    )
}
