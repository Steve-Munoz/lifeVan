"use client"
import React, {useState, useEffect} from "react"
import VansNav from "./components/VansNav"
import {useParams} from "next/navigation"
import Link from "next/link"
import "../../../server"

export default function VanInfoLayout({
    children,
}){
    const [currentVan, setCurrentVan] = useState(null)
    const params = useParams()

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`).then(res=>res.json()).then(data => setCurrentVan(data.vans))
    },[currentVan])

    // if(!currentVan){
    //     return <h1>Loading..</h1>
    // }
    return(
        <section>
            <VansNav/>
            <section>

            </section>
            {children}
        </section>
    )
}