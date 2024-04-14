'use client'
import React, { useState } from 'react'
import img from '../images/pattern-bg-desktop.png'
import arrowIcon from '../images/icon-arrow.svg'

type Props = {
    setIPAddress: any
    fetchLocation: any
}

export default function SearchBar(props: Props) {
    const [ipAddress, setIpAddress] = useState('')
    const handleClick = () =>{
        props.setIPAddress(ipAddress)
        props.fetchLocation(ipAddress)
    }
    return (
        <div className='h-2/5 min-w-full bg-cover flex flex-col gap-5 justify-center items-center' style={{backgroundImage: `url(${img.src})`}}>
            <h2 className='text-white font-bold items-center'>IP Address Tracker</h2>
            <div className='md:w-1/2 sm:w-1/2 lg:w-1/3 flex justify-center items-center h-10'>
                <input type="text" className='text-black w-4/5 h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground' placeholder='Enter the IP Address' onChange={(e)=> setIpAddress(e.target.value)}></input>
                <div className='bg-black w-14 h-full flex rounded-md cursor-pointer justify-center items-center'>
                    <img src={arrowIcon.src} alt='arrowIcon' className='px-3 py-2' onClick={(e) => handleClick()}></img>
                </div>
            </div>
        </div>
    )
}