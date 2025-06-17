"use client"
import Link from 'next/link'
import React, {useEffect, useState} from "react"
import "../server"

export default function Vans(){
    const [vans, setVans] = useState([])
    useEffect(()=>{fetch("api/vans").then(res=> res.json()).then(data=> setVans(data.vans))

    },[])
    const vanElements = vans.map(van =>
        <div className ="border border-gray-200 " key ={van.id}>
            <Link href ={`/vans/${van.id}`}>
            <img className = "size-150" src ={van.imageUrl}/>
            <div>
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className = {`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
    
    return(
        <>
            <div className ="flex flex-col">
                <h1>Explore our van options</h1>
                <div className ="flex-grow ">{vanElements}</div>
                <Link href="/">Return to Home Page</Link>

            </div>
        
        </>
    )
}