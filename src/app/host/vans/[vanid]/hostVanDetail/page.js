"use client"
import React from "react"
import Link from "next/link"

export default function Details(){
    return(
        <>
        
            <h1>Details goes here!!</h1>
            <button className ="hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[19px]"><Link href = "/host/reviews">Details</Link></button>
           
        </>

    )
}