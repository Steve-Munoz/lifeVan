
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
            className = "w-full h-auto"
            />
            <div className = "ps-[23px] pe-[23px] text-[#161616] mb-[55px]">
                <h1 className = "leading-[38px] py-[10px] font-bold text-2xl"> Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className = "leading-[22px] pb-[5px]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className = "leading-[22px]">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className = "h-auto bg-[#FFCC8D] text-black ps-[32px] pe-[32px] pb-[32px] ms-[27px] me-[27px] rounded">
                <h2 className = "m-0 ps-[37px] pe-[37px] py-[10px] font-bold text-[40px]">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className = "rounded-[10px] font-bold inline-block text-center py-[.75rem] px-[1.375rem] bg-[#161616] text-white" href ={"/vans"}>Explore our Vans</Link>
            </div>
        </div>
        
        </>
    )
}