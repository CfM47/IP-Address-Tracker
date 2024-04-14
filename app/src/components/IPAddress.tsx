'use client'
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Details from './Details'
import Map from './Map'
import dynamic from 'next/dynamic'

type Props = {}

const DynamicMap = dynamic(() => import('./Map'))

export default function IPAddress({}: Props) {
    const [IPAddress, setIPAddress] = useState('')
    const [location, setLocation] = useState('')
    const [timezone, setTimezone] = useState('')
    const [ISP, setISP] = useState('')
    const [coordinates, setCoordinates] = useState({lat:51.505, lng:-0.09})

    const fetchLocation = (ipAddress = '') => {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_HBwfgXpOeInjdma7OpFnSkHbf3mtS&ipAddress=${ipAddress}`
        )
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data)
                setLocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`)
                setTimezone(`UTC ${data.location.timezone}`)
                setISP(`${data.isp}`)
                setCoordinates({lat: data.location.lat, lng: data.location.lng})
            })
    }
    useEffect(()=>fetchLocation(), [])

    return (
        <div className="flex flex-col h-screen relative">
            <SearchBar setIPAddress={setIPAddress} fetchLocation={fetchLocation}></SearchBar>
            <Details ipAddress={IPAddress} location={location} timezone={timezone} isp={ISP}></Details>
            <DynamicMap coordinates={coordinates}></DynamicMap>
        </div>
    )
}