"use client"
import Link from "next/link"
import React, {useState} from 'react';
import {usePathname} from "next/navigation"

export default function Hostnav(){
    const navigation =[
        {path: '/host', name: 'Host'},
        { path: '/host/income', name: 'Income' },
        {path: '/host/reviews', name: 'Reviews' },
        {path: '/host/vans', name: 'Vans' },
    ]
    const pathname = usePathname()
    const isActive = (path) => path === pathname;
    return(
        <>
        <nav className = "flex flex-col h-10 justify-between items-center bg-orange-200 pe-2.5 ps-2.5 mx-auto font-[Poppins">
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
        </>
    )
}