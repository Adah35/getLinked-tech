'use client'
import React, { useEffect, useState } from 'react';
import Modal from './successModal';

const RegistrationForm = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const [category, setCategory] = useState(1)
    const [size, setSize] = useState(1)
    const [check, setCheck] = useState<boolean>(false)

    useEffect(() => {
        console.log(size)
    }, [size])

    const [modal, setModal] = useState<boolean>(false)
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await fetch(' https://backend.getlinked.ai/hackathon/registration', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, 'phone_number': phone, 'team_name': name, 'group_size': size, 'project_topic': topic, 'category': category, 'privacy_poclicy_accepted': check })
        })
        if (res.ok) {
            setModal(true)
        }
    }

    const onCategoryChanged = (e: any) => setCategory(e.target.value)
    const onSizeChanged = (e: any) => setSize(e.target.value)

    return (
        <div className="max-w-md mx-auto mt-10   rounded-lg bg-transparent-gray">
            <Modal isSuccess={true} />
            <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                    <label className='pb-6 text-sm '>Teams Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-sm focus:outline-none focus:border-[#D434FE] text-sm"
                        placeholder="Enter the name of the group"
                    />
                </div>
                <div>
                    <label className='pb-6 text-sm '>Phone</label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-sm focus:outline-none focus:border-[#D434FE] text-sm"
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
                <div >
                    <label className='pb-6 text-sm '>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-sm focus:outline-none focus:border-[#D434FE] text-sm"
                        placeholder="Enter your email address"
                    />
                </div>
                <div >
                    <label className='pb-6 text-sm '>Project Topic</label>
                    <input
                        onChange={(e) => setTopic(e.target.value)}
                        type="text"
                        className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-sm focus:outline-none focus:border-[#D434FE] text-sm"
                        placeholder="What is your group project topic"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 my-4">
                <div>
                    <label htmlFor="" className='pb-3 '>Category</label>
                    <select
                        value={category}
                        className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-sm focus:outline-none focus:border-[#D434FE] text-sm" onSelect={onCategoryChanged}>
                        <option value="category1">Select your category</option>
                        <option value="category1">1</option>
                        <option value="category2">2</option>
                        <option value="category3">3</option>
                    </select>
                </div>
                <div>
                    <label className='pb-6 text-sm '>Group Size</label>
                    <select
                        value={size}
                        className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-sm focus:outline-none focus:border-[#D434FE]" onSelect={onSizeChanged}>
                        <option >Select</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <p className='text-sm text-[#D434FE]'>Please review your registration details before submitting</p>
                <span className='flex items-center justify-between'><input
                    onChange={e => setCheck(prev => !prev)} type="checkbox" /> <p className='text-sm my-2'>I agreed with the event terms and conditions  and privacy policy</p></span>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] hover:bg-[#903AFF]  text-white px-4 py-2 rounded-lg  focus:outline-none"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;
