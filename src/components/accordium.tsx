'use client'
import React, { useState } from 'react';


export default function AccordionItem({ title, content }: { title: any, content: any }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4">
            <div className='flex justify-between items-center border-b-[#D434FE] border-b py-3'> <p >Can I work on a project I started before the hackathon?
            </p> <span className='text-[#D434FE] cursor-pointer' onClick={toggleAccordion} >+</span></div>
            {isOpen && (
                <div className=" p-2 rounded-md bg-[rgba(0,0,0,0.3)] ">
                    {content}
                </div>
            )}
        </div>
    );
};

