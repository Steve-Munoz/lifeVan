"use client"
import Link from "next/link"
import React, {useState} from 'react';
import {useParams} from "next/navigation"
import {usePathname} from "next/navigation"
import HostVanNav from "./components/VansNav"
import HostSelectedVan from '../[vanid]/components/HostSelectedVan'

export default function HostVansNavLayout({
    children
}){
  
    return(
        <>
        <HostSelectedVan/>
        {children}
        <HostVanNav/>
        </>


    )

}