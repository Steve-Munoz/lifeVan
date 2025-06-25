"use client"
import React,{useEffect, useState} from "react"
import Link from "next/link"
import "../../server"

export default function HostListedVans(){
    const [hostVanCards, setHostVanCards] = useState([])
    useEffect(()=>{
  
    fetch("/api/vans").then(res=> res.json()).then(data=> setHostVanCards(data.vans))
  },[])
  console.log(hostVanCards)

     const vanElements = hostVanCards.map(van=>(
    <div key = {van.id} className = "max-w-sm rounded-2xl mb-4 overflow-hidden shadow-lg">
      <Link href={`/vans/${van.id}`}>
      <img className =" w-full" src = {van.imageUrl}/>
      <div className = "van-info px-6 py-4"> 
        <h3 className = "font-bold text-xl mb-2">{van.name}</h3>
        <p className ="text-gray-700 text-base">${van.price}<span>/day</span></p>
      </div>
      </Link>
    </div>
  ))
  
    return(
        <>
        <div className ="flex flex-col ">
            <h1 className ="bold text-50">Your Listed Vans</h1>
            {/* <img src={hostVanCards.imageUrl}/> */}
           
            {vanElements}
            
        </div>
        
        </>
    )
}