"use client"
import React from "react"
import Link from "next/link"

export default function Reviews(){
    return(
    <>
        <div className = "flex flex-col">
            <h1>Reviews goes here</h1>
            <button className ="hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[19px]"><Link href ="/host/income"> Go back to income</Link></button>
            <br></br>
            <button className = "hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[19px]"><Link href ="/host">Go  back to host dashboard</Link></button>

        </div>
        
    </>
    )
}