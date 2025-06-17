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
        <nav>
            <ul>
                {navigation.map(({path,name})=>(
                    <li key = {path}>
                        <Link href ={path}>
                            <span>{name}</span>

                        </Link>

                    </li>
                ))}
            </ul>
            
        </nav>
        </>
    )
}