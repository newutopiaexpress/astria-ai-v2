/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3E3dlWMavIx
 */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiOutlineGoogle } from "react-icons/ai";
import PricingSection from "@/components/PricingSection";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { FaFemale, FaMale, FaRainbow } from "react-icons/fa";


export function Bento2() {
  return (
<div>
	<div className="grid grid-cols-1 lg:grid-cols-12 md:gap-6  lg:max-w-[1200px] md:mt-12 mx-auto">

        <div className="md:col-span-8 lg:col-span-9 mb-6 md:mb-0">
            <div className="bg-stone-950 rounded-3xl grid md:grid-cols-2 md:gap-0 relative">
                <Link href="/login" className="absolute top-0 right-0 z-40 w-20 h-20 bg-stone-900 rounded-full hidden md:block outline outline-offset-2 outline-stone-300 hover:outline-stone-300/0">
                    <CamIcon/>
                    <Image
                        className="z-10 hover:-rotate-6 transition-all duration-50"
                        height="100"
                        width="100"
                        alt="hello"
                        src="/lens.png">
                    </Image>
                </Link>
                <Image
                    className="absolute top-0 right-0 z-10  hidden md:block"
                    height="125"
                    width="130"
                    alt="hello"
                    src="/kor.png">
                </Image>


                <div className="md:col-span-1 relative p-6 min-h-[500px]">
                    <div className="absolute left-8 bottom-[240px] max-w-96">
                        <h1 className="text-stone-300 font-thin tracking-tight drop-shadow-sm [text-wrap:balance] text-4xl leading-[2.5rem] md:text-5xl md:leading-[3rem]">Stunningly lifelike photos, as if taken by a professional photographer. </h1>
                    </div>
                    <div className="absolute left-8 -bottom-16 w-96">
                        <p className="text-stone-400 font-thin drop-shadow-sm [text-wrap:balance] text-md italic">Upload your photos and let the magic happen</p>
                        <div className="relative w-60 h-[200px] mt-6">
                            <Image
                            className="absolute left-0 top-0 rounded-full w-16 h-16 shadow-lg"
                            height="128"
                            width="128"
                            alt="hello"
                            src="/s1.png">
                            </Image>
                            <Image
                            className="absolute left-14 top-0 rounded-full w-16 h-16 shadow-lg"
                            height="128"
                            width="128"
                            alt="hello"
                            src="/s2.png">
                            </Image>
                            <Image
                            className="absolute right-16 top-0 rounded-full w-16 h-16 shadow-lg"
                            height="128"
                            width="128"
                            alt="hello"
                            src="/s4.png">
                            </Image>
                        </div>
                        
                    </div>
                </div>

                <div className="order-1 md:col-span-1 relative p-6 bg-cover bg-center md:bg-right rounded-3xl min-h-[700px]"  style={{ backgroundImage: "url('/ai.png')" }}>
                </div>

            </div> 

            <div className="md:w-2/3 md:float-right mt-6 mb-16 border border-stone-300 rounded-3xl p-6 text-center md:text-right bg-gradient-to-tr from-black to-stone-900">
                <h1 className="font-thin tracking-tight drop-shadow-sm [text-wrap:balance] text-4xl leading-[2.5rem] md:text-5xl md:leading-[2.7rem] text-stone-100">Take photos with Ai, that <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">sees your inner beauty</span></h1>
                <p className="text-stone-400 font-thin drop-shadow-sm [text-wrap:balance] text-md italic mt-4">Powered by: Flux AI by <Link className="text-stone-500 font-normal" target="_blank" href="https://blackforestlabs.ai/">Black Forest Labs</Link>  </p>
            </div> 

        </div>

        <div className="md:col-span-4 lg:col-span-3 flex flex-col">  

            <div className="mb-6 bg-slate-100 rounded-3xl relative p-6 shadow-md shadow-stone-600/10 transition-all duration-50 hover:shadow-xl">
                <p className="text-md mb-4">"Loved the variety and styling. Very happy with the images!"</p>
                <Image
                        className="w-10 h-10 rounded-full float-left mr-2"
                        height="512"
                        width="512"
                        alt="hello"
                        src="/square.png">
                </Image>
                <p className="text-sm font-bold align-baseline mt-6">
                    Barbara
                </p>
            </div>  

            <div className="mb-6 bg-slate-100 rounded-3xl relative p-6 shadow-md shadow-stone-600/10 transition-all duration-50 hover:shadow-xl">
                <p className="text-md mb-4">"The results were quick and I couldn't be more happy with the images. I recommend and have done so with my colleagues and family."</p>
                <Image
                        className="w-10 h-10 rounded-full float-left mr-2"
                        height="512"
                        width="512"
                        alt="hello"
                        src="/square.png">
                </Image>
                <p className="text-sm font-bold align-baseline mt-6">
                    Barbara
                </p>
            </div> 

            <div className="relative mb-6 min-h-96 bg-slate-100 text-stone-200 rounded-3xl p-6 shadow-md shadow-stone-600/10 transition-all duration-50 hover:shadow-xl bg-cover" style={{ backgroundImage: "url('/v0.png')" }}>
                <div className="absolute bottom-4">
                    <p className="text-md mb-4">"Loved the variety and styling.<br/>Very happy with the images!"</p>
                    <Image
                        className="w-10 h-10 rounded-full float-left mr-2"
                        height="512"
                        width="512"
                        alt="hello"
                        src="/square.png">
                    </Image>
                    <p className="text-md font-bold align-baseline mt-6">
                        - Dee Dee Cormier
                    </p>
                </div>
            </div>  

        </div>
        
	</div>

    <div className="lg:max-w-[1200px] mx-auto mb-6">


            <div className="h-fit mx-auto">
                <div className="grid md:grid-cols-1 md:gap-12 lg:gap-16 relative mb-6 text-center mx-auto">
                        <div className="mx-auto transition-all w-52 h-52 bg-stone-200 hover:bg-slate-100 rounded-full z-10 col-span-1 relative p-6 shadow-md outline outline-8 hover:outline-2 hover:outline-offset-4 outline-offset-8 outline-stone-300/20 hover:outline-fuchsia-300/40">
                            <p className="mx-auto w-8 h-8 shadow-inner bg-stone-200 text-stone-600 rounded-full text-center content-center">1</p><br/>
                            <p className="font-bold  mb-2 leading-tight">Upload 8-16 pictures of yourself</p>
                            <p className="text-xs mb-6">
                                <Link href="/login" className="underline underline-offset-1 italic">
                                    How to get the best results?
                                </Link>
                            </p>
                        </div>
                        <div className="mx-auto transition-all w-52 h-52 bg-stone-100 hover:bg-slate-100 rounded-full z-10 col-span-1 relative p-6 shadow-md outline outline-8 hover:outline-2 hover:outline-offset-4 outline-offset-8 outline-stone-300/20 hover:outline-sky-300/40">
                        <p className="mx-auto w-8 h-8 shadow-inner bg-stone-200 text-stone-600 rounded-full text-center content-center">3</p><br/>
                            <p className="font-bold mb-2 leading-tight">We train a custom AI model for you</p>
                            <p className="text-xs mb-6">
                                We use the latest technology by
                                <Link href="/login" className="underline underline-offset-1 italic ml-1">
                                    Flux AI
                                </Link>
                            </p>
                        </div>
                        <div className="mx-auto transition-all w-52 h-52 bg-stone-200 hover:bg-slate-100 rounded-full z-10 col-span-1 relative p-6 shadow-md outline outline-8 hover:outline-2 hover:outline-offset-4 outline-offset-8 outline-stone-300/20 hover:outline-lime-300/40">
                        <p className="mx-auto w-8 h-8 shadow-inner bg-stone-200 text-stone-600 rounded-full text-center content-center">4</p><br/>
                            <p className="font-bold mb-2 leading-tight">Get your portrait photos</p>
                        </div>
                </div>
            </div>

        <h1 className="text-center px-6 py-12 text-stone-800 font-thin tracking-tight drop-shadow-sm [text-wrap:balance] text-4xl leading-[2.5rem] md:text-5xl md:leading-[3rem]">Studio quality photos, minus the studio costs</h1>
        <div className="mx-auto text-center scale-125 pb-12">
            <Link href="/login" className="ml-4">
                <Button variant={"google"} size={"md"}>Login with Google
                    <AiOutlineGoogle size={20} className="ml-2"/>
                </Button>
            </Link>
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-9 lg:max-w-[1200px] mx-auto">

                        <div className="mb-6 col-span-1 bg-slate-100 h-50 rounded-3xl relative shadow-md shadow-stone-600/10 hover:scale-105 transition-all duration-50 hover:shadow-xl hover:outline hover:outline-2 hover:outline-offset-4 outline-offset-8 outline-stone-300/20 hover:outline-stone-300/50">
                            <div className="p-6">  
                                <p><StarIcon/></p><br/>
                                <p className="font-bold mt-2">One Session</p>
                                <p className="text-xs md:h-20">40 photos in 4 different settings, each setting contain 8 photo.</p>
                                <p className="font-normal text-5xl">
                                    9<span className="font-normal text-xl">€</span>
                                    <Link href="/login" className="float-right">
                                        <Button variant="outline" size="sm">Select</Button>
                                    </Link>
                                </p> 
                            </div>  
                            <p className="bg-green-200/50 pl-2 pr-2 pb-4 pt-4 rounded-b-3xl text-xs text-center">100% Money Back Guarantee</p>
                        </div>

                        <div className="mb-6 col-span-1 bg-slate-100 h-50 rounded-3xl relative shadow-md shadow-stone-600/10 hover:scale-105 transition-all duration-50 hover:shadow-xl">
                            <div className="p-6">  
                                <p><StarIcon/><StarIcon/><StarIcon/></p><br/>
                                <p className="font-bold mt-2">3 Session</p>
                                <p className="text-xs md:h-20">Three modell, 3x12 photos in three different settings.</p>
                                <p className="font-normal text-5xl">
                                    25<span className="font-normal text-xl">€</span>
                                    <Link href="/login" className="float-right">
                                        <Button variant="outline" size="sm">Select</Button>
                                    </Link>
                                </p> 
                            </div>  
                            <p className="bg-green-200/50 pl-2 pr-2 pb-4 pt-4 rounded-b-3xl text-xs text-center">100% Money Back Guarantee</p>
                        </div>

                        <div className="mb-6 col-span-1 bg-slate-100 h-50 rounded-3xl relative shadow-md shadow-stone-600/10 hover:scale-105 transition-all duration-50 hover:shadow-xl">
                            <div className="p-6">  
                                <p><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p><br/>
                                <p className="font-bold mt-2">5 Session</p>
                                <p className="text-xs md:h-20">Five modell, 5x12 photos in three different settings.</p>
                                <p className="font-normal text-5xl">
                                    39<span className="font-normal text-xl">€</span>
                                    <Link href="/login" className="float-right">
                                        <Button variant="outline" size="sm">Select</Button>
                                    </Link>
                                </p> 
                            </div>  
                            <p className="bg-green-200/50 pl-2 pr-2 pb-4 pt-4 rounded-b-3xl text-xs text-center">100% Money Back Guarantee</p>
                        </div> 
    </div>

    <div className="border-0  px-6 py-12  mx-auto">
            <div className="grid md:grid-cols-4 gap-6 relative">
                        <div className="col-span-1 bg-stone-200 rounded-3xl relative  shadow-stone-600/10">
                            <div className="absolute w-60 top-6 left-0 scale-75">
                                <div className="relative">
                                    <Image
                                    className="absolute left-0 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s5.png">
                                    </Image>
                                    <Image
                                    className="absolute left-14 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s6.png">
                                    </Image>
                                    <Image
                                    className="absolute right-16 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s7.png">
                                    </Image>
                                </div>
                            </div>
                            <Image
                            className="cover rounded-3xl"
                            height="896"
                            width="993"
                            alt="hello"
                            src="/male.png">
                            </Image>
                        </div>
                        <div className="col-span-1 bg-stone-200  rounded-3xl relative  shadow-stone-600/10">
                            <div className="absolute w-60 top-6 left-0 scale-75">
                                <div className="relative">
                                    <Image
                                    className="absolute left-0 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s1.png">
                                    </Image>
                                    <Image
                                    className="absolute left-14 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s2.png">
                                    </Image>
                                    <Image
                                    className="absolute right-16 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s3.png">
                                    </Image>
                                </div>
                            </div>
                            <Image
                            className="cover rounded-3xl"
                            height="1152"
                            width="896"
                            alt="hello"
                            src="/female.png">
                            </Image>
                        </div>
                        <div className="col-span-1 bg-stone-200  rounded-3xl relative  shadow-stone-600/10">
                            <div className="absolute w-60 top-6 left-0 scale-75">
                                <div className="relative">
                                    <Image
                                    className="absolute left-0 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s5.png">
                                    </Image>
                                    <Image
                                    className="absolute left-14 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s6.png">
                                    </Image>
                                    <Image
                                    className="absolute right-16 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s7.png">
                                    </Image>
                                </div>
                            </div>
                            <Image
                            className="cover rounded-3xl"
                            height="1152"
                            width="896"
                            alt="hello"
                            src="/male2.png">
                            </Image>
                        </div>
                        <div className="col-span-1 bg-stone-200  rounded-3xl relative shadow-stone-600/10">
                            <div className="absolute w-60 top-6 left-0 scale-75">
                                <div className="relative">
                                    <Image
                                    className="absolute left-0 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s1.png">
                                    </Image>
                                    <Image
                                    className="absolute left-14 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s2.png">
                                    </Image>
                                    <Image
                                    className="absolute right-16 top-0 rounded-full w-16 h-16 shadow-lg"
                                    height="128"
                                    width="128"
                                    alt="hello"
                                    src="/s3.png">
                                    </Image>
                                </div>
                            </div>
                            <Image
                            className="cover rounded-3xl"
                            height="1071"
                            width="896"
                            alt="hello"
                            src="/v6.png">
                            </Image>
                        </div>

                        
            </div>
    </div>

    <div className="mx-auto text-center pt-20 pb-16 md:pb-0">
            <p className="md:border md:border-stone-300 md:rounded-full max-w-max mx-auto py-4 px-6 md:outline md:outline-offset-2 md:outline-stone-300/50">
                Create your account and get your awesome photos!
            <Link href="/login" className="ml-4">
                <Button variant={"google"} size={"md"}>Login with Google
                    <AiOutlineGoogle size={20} className="ml-2"/>
                </Button>
            </Link>
            </p> 
    </div>


</div>
  )
}

function CamIcon2() {
    return ( 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="z-50 w-10 h-10 text-stone-800 mx-auto my-4 hover:animate-ping">
 <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
)
}

function CamIcon() {
    return ( 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="absolute left-6 top-2 z-50 w-8 h-8 text-stone-200 mx-auto my-4 hover:animate-ping">
 <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
)
}

function StarIcon() {
    return (
<svg className="w-6 h-6 float-left  opacity-10" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg> 
    )
}


  export function PlusIcon() {
    return (
        <svg className="w-8 h-8" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
}

export function SunIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-1 w-8 h-8 float-right">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

    )
}
export function MoonIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-1 w-8 h-8 float-right">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
</svg>
    )
}

export function UserIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-1 w-8 h-8 float-right">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>

    )
}







