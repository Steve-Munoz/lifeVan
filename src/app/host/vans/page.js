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
    <div key = {van.id} className = "van-title">
      <Link href={`host/vans/${van.id}`}>
      <img src = {van.imageUrl}/>
      <div className = "van-info"> 
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))
  
    return(
        <>
        <div className ="flex flex-col">
            {/* <img src={hostVanCards.imageUrl}/> */}
           
            {vanElements}
            
        </div>
        
        </>
    )
}