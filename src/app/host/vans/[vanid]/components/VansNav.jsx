"use client"
import Link from "next/link"
import React, {useState} from 'react';
import {useParams} from "next/navigation"
import {usePathname} from "next/navigation"

export default function HostVansNav({
    children
}){
    const params = useParams()
    const navigation =[
            {path: `/host/vans/${params.vanid}/details`, name: 'Details' },
            {path: `/host/vans/${params.vanid}/hostVanPricing`, name: 'Pricing' },
            {path: `/host/vans/${params.vanid}/Photos`, name: 'Photos' },
        ]
        const pathname = usePathname()
        const isActive = (path) => path === pathname;
    return(
        <>
        <div className ="flex flex-col">

       
   
        <nav className = "flex flex-col h-10 justify-between items-center bg-white-200 pe-2.5 ps-2.5 mx-auto font-[Poppins">
           
            <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
                {navigation.map(({path,name})=>(
                    <li key = {path}>
                        <Link className = {`${isActive(path) ? 'underline font-medium': ""} underline-offset-1 text-[17px]`} href ={path}>
                            <span>{name}</span>

                        </Link>

                    </li>
                ))}
            </ul>
            
        </nav>
         </div>
        </>


    )

}