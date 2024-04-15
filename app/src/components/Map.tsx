"use client"
import React from 'react'
import 'leaflet/dist/leaflet.css'
import {Marker, MapContainer, TileLayer} from 'react-leaflet'
import markerIcon from "../images/icon-location.svg"
import L, {LatLngExpression, LatLngTuple} from 'leaflet'


type Props = {
    coordinates: {
        lat: number
        lng: number
    }
}

export default function Map(props: Props) {
    const marker = L.icon(
        { 
            iconUrl: markerIcon.src,
            iconSize: [40,50],
            iconAnchor: [20, 50]
        })
    let state = {
        keyMap : Math.random()
    }
    const position = [props.coordinates.lat, props.coordinates.lng]
    
    return (
        <MapContainer key={state.keyMap} center={[position[0], position[1]]} className="w-full h-full min-h-[700px] z-0" zoom={18}>
            <TileLayer attribution="Google Maps" url="https://google.com/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"/>
            <Marker position={[position[0], position[1]]} icon={marker} draggable={false}></Marker>
        </MapContainer>
    )
}