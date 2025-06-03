"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname} from "next/navigation"

export default function Navbar(){
    const navigation = [
        {path: '/', name: 'Home'},
        {path: '/about', name: 'About'},
        {path: '/host', name: 'Host'},
        {path: '/vans', name: 'Vans'},
    ];
    const pathname = usePathname()
    const isActive = (path) => path === pathname;
    return (
        <>
            <nav className = "flex h-28 justify-between items-center bg-white pe-2.5 mx-auto font-[Poppins]" >
                <div className = "bg-white m-28">
                    <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
                        {navigation.map(({path,name})=>(
                            
                            <li key = {path}>
                                <Link className = {`${isActive(path)} ? 'underline font-[500]' : hover:text-[#161616]}`} href = {path}>
                                <span>{name}</span>
                                </Link>

                            </li>
                        ))}
                    </ul>

                </div>

            </nav>
            
        </>
    )
}

