"use client"

import React, {useState, useEffect} from "react";
import {useParams} from "next/navigation"
import Link from "next/link"
import "../../../../server"

export default function HostSelectedVan(){
    const [currentHostVan, setCurrentHostVan] = useState([])
    const params = useParams()


    useEffect(()=>{
        fetch(`/api/vans/${params.vanid}`).then(res=>res.json()).then(data=>setCurrentHostVan(data.vans))
    },[currentHostVan])

    if(!currentHostVan){
        return <h1>Loading..</h1>
    }

    return(
        <>
    <div className = "max-w-sm rounded-2xl mb-4 overflow-hidden shadow-lg">
      <img className =" w-full" src = {currentHostVan.imageUrl}/>
      <div className = "van-info px-6 py-4"> 
        <h3 className = "font-bold text-xl mb-2">{currentHostVan.name}</h3>
        <p className ="text-gray-700 text-base">${currentHostVan.price}<span>/day</span></p>
      </div>
    </div>
        </>
    )
}
