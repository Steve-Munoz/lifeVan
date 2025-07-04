"use client"
import React, {useEffect, useState} from "react"
import {useParams} from "next/navigation"
import "../../server"


export default function VanDetails(){
    const [vanDetails, setVanDetails] = useState([])
    const params = useParams()
    useEffect(()=>{fetch(`/api/vans/${params.vanid}`).then(res=>res.json()).then(data=>setVanDetails(data.vans))},[])

    console.log(vanDetails)
    // console.log(params)
    return(
        <>
        <div>
            <h1>Van Details: ID: {params.vanid}</h1>
            {vanDetails ? (
                <div className = "flex flex-col min-h-screen">
                    <img className ="size-150"src = {vanDetails.imageUrl}/>
                    <i className = {`van-type ${vanDetails.type}`}>{vanDetails.type}</i>
                    <h2>{vanDetails.name}</h2>
                    <p>${vanDetails.price}<span>/day</span></p>
                    <p>{vanDetails.description}</p>
                    <button className ="link-button p-[5px] font-bold bg-[#FF8C38] rounded-md">Rent this</button>
                </div>

            ): <h2>Loading..</h2>
            }   
           

        </div>
        </>
    )
}