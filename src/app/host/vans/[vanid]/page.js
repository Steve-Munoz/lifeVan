"use client"

import React, {useState, useEffect} from "react";
import {useParams} from "next/navigation"
import Link from "next/link"
import "../../../server"

export default function HostSelectedVan(){
    const [currentHostVan, setCurrentHostVan] = useState(null)
    const params = useParams()


    useEffect(()=>{
        fetch(`/api/vans/${params.vanid}`).then(res=>res.json()).then(data=>setCurrentHostVan(data.vans))
    },[])

    if(!currentHostVan){
        return <h1>Loading..</h1>
    }

    return(
        <>
        <div>
            test
            </div>
        </>
    )
}

// "use client"
// import React, {useEffect,useState} from "react"
// import "../../server"
// export default function VanDetails({params}){
//     const [vanDetails, setVanDetails] = useState(null)
//     useEffect(()=>{
//         fetch(`/api/vans/${params.vanid}`).then(res=>res.json()).then(data=>setVanDetails(data.vans))

//     },[])
//     return(
//         <>
//         <div className = "van-detail-container">
//         <h1>Van details: ID: {params.vanid}</h1>
//         {vanDetails ? (
//         <div>
//             <img src={vanDetails.imageUrl}/>
//             <i className = {`van-type ${vanDetails.type}`}>{vanDetails.type}</i>
//             <h2>{vanDetails.name}</h2>
//             <p className = "van-price"><span>${vanDetails.price}</span>/day</p>
//             <p>{vanDetails.description}</p>
//             <button className = "link-button p-[5px] font-bold bg-[#FF8C38] rounded-md">Rent this van</button>

//         </div>): <h2>Loading...</h2>
//         }
            
//         </div>
            
//         </>
//     )
// }