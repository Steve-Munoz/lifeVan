"use client"

import React from "react";
import {useParams} from "next/navigation"

import Link from "next/link"

export default function VansNav(){
    const params = useParams()
    return(
        <>
        <Link href ={`/host/vans/${params.vanid}/hostVanDetail`}>Details</Link>
        <Link>Pricing</Link>
        <Link>Photos</Link>
        </>
    )
}