'use client'
import React, { useState } from 'react'
import img from '../images/pattern-bg-desktop.png'
import arrowIcon from '../images/icon-arrow.svg'
import Details from './Details'

type Props = {
    setIPAddress: any
    fetchLocation: any
    details : string[]
}

export default function SearchBar(props: Props) {
    const [ipAddress, setIpAddress] = useState('')
    const handleClick = () =>{
        props.setIPAddress(ipAddress)
        props.fetchLocation(ipAddress)
    }

    const [IPAddress, location, timezone, ISP] = [...props.details]
    return (
        <div className='min-w-full bg-contain bg-center flex flex-col gap-5 justify-center items-center'>
            <img src={img.src} className='absolute h-[400px] z-[2] bg-repeat touch-none'></img>
            <h1 className='text-white font-bold z-[2] items-center mt-[30px] mb-[30px] text-3xl'>IP Address Tracker</h1>
            <div className='md:w-1/2 sm:w-1/2 lg:w-1/3 flex flex-row justify-center items-center h-10 z-[2]'>
                <input type="text" className='text-black w-4/5 h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground' placeholder='Enter the IP Address' onChange={(e)=> setIpAddress(e.target.value)}></input>
                <div className='bg-black w-14 h-full flex rounded-md cursor-pointer justify-center items-center'>
                    <img src={arrowIcon.src} alt='arrowIcon' className='px-3 py-2' onClick={(e) => handleClick()}></img>
                </div>
            </div>
            <Details ipAddress={IPAddress} location={location} timezone={timezone} isp={ISP}></Details>
        </div>
    )
}