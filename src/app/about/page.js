
import Link from 'next/link'
import bgImg from '../../../public/images/about-hero.png'
import Image from 'next/image'
export default function About(){
    
    return(
        <>
        <div>
            <Image
            src ={bgImg}
            alt = "home picture of van"
            className = "w-full h-auto mb-5"
            />
            <div className ="grid grid-cols-2">

                <div className = "ps-[23px] pe-[23px] text-[#161616] rounded-[10px] bg-[#FFCC8D] pb-[32px] ms-[27px] me-[27px]">
                <h1 className = "leading-[38px] py-[10px] font-sans font-bold text-2xl"> Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className = " font-sans leading-[22px] mb-3 pb-[5px]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className = "font-sans leading-[22px]">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className = "grid grid-rows-3 rounded-[10px] bg-[#FFCC8D] text-black ps-[32px] pt-3 pe-[32px] pb-[32px] ml-2 me-[27px]">
                <h2 className = "m-0 ps-[37px] pe-[37px] py-[10px] font-bold font-sans text-4xl">Your destination is waiting.</h2>
                <h2 className = "m-0 ps-[37px] pe-[37px] py-[10px] font-bold font-sans text-4xl">Your van is ready.</h2>
                <div className = "m-0 ps-[37px] pe-[37px] py-[10px] rounded-[10px]">
                    <Link className = " m-0 ps-[37px] pe-[37px] py-[10px] rounded-[10px] font-bold font-sans inline-block text-center bg-[#161616] text-white" href ={"/vans"}>Explore our Vans</Link>

                </div>
                
            </div>

            </div>
            
        </div>
        
        </>
    )
}