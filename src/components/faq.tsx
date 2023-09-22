'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import AccordionItem from './accordium';

const data = [
    {
        title: 'Can I work on a project I started before the hackathon?',
        content: "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements."
    },
    {
        title: 'What happens if I need help during the hackathon? ',
        content: "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements."
    },
    {
        title: 'What happens if I need help during the hackathon? ',
        content: "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements."
    },
    {
        title: 'Can I join a team or do I have to come with one? ',
        content: "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements."
    },
    {
        title: 'What happens after the hackathon ends ',
        content: "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements."
    },
    {
        title: 'Can I work on a project I started before the hackathon? ',
        content: "Adherence to Hackathon Rules: Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements."
    },
]
export default function FAQs() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <section className="flex flex-col lg:flex-row  items-center w-full justify-center lg:justify-between border-b-gray-400 border-b  lg:px-32 px-10 ">

            <div className="w-full md:w-1/2 ">
                <h1 className="font-bold text-4xl  whitespace-nowrap">Frequently Ask
                </h1>
                <h1 className="font-bold text-4xl  whitespace-nowrap text-[#D434FE] mb-4">
                    Question</h1>
                <div> <p className='leading-6 mb-4'>We got answers to the questions that you might<br />
                    want to ask about getlinked Hackathon 1.0</p>

                    {
                        data.map((value, index) => {
                            return (
                                <AccordionItem title={value.title} content={value.content} key={index} />
                            )
                        })
                    }

                </div>
            </div>
            <div className="w-full md:w-1/2  flex justify-end">
                <Image
                    src={"/assets/cwok_casual_21.PNG"}
                    className=""
                    width={390}
                    height={377}
                    alt="logo"
                />
            </div>
        </section>
    )
}
