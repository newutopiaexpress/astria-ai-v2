/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/L39ONFFHsKO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import PricingSection from "./PricingSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiOutlineGoogle } from "react-icons/ai";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  
  

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function UtopiaSecond() {
  return (
    <section className="px-2 py-12 md:px-8">

        <div className="border-b border-stone-300 pt-4 pb-9 px-4 md:px-6 text-center mb-12">

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upload and do the Magic</h2>

            <div className="w-60  mb-6 mt-6 flex flex-row gap-1 mx-auto relative">
            <Image
                className="cover w-12 h-12 rounded-full ml-4 shadow-md border shadow-stone-800/20"
                height="128"
                width="128"
                alt="hello"
                src="/s1.png"
            />
            <Image
                className="cover w-12 h-12 rounded-full -ml-4 shadow-md border shadow-stone-800/20"
                height="128"
                width="128"
                alt="hello"
                src="/s2.png"
            />
            <Image
                className="cover w-12 h-12 rounded-full -ml-4 shadow-md border shadow-stone-800/20"
                height="128"
                width="128"
                alt="hello"
                src="/s3.png"
            />
            <Image
                className="cover w-12 h-12 rounded-full -ml-4 shadow-md border shadow-stone-800/20"
                height="128"
                width="128"
                alt="hello"
                src="/s4.png"
            />
            
            <div className="w-12 h-12 z-40 transition-all ml-1">
                <div className="cursor-pointer pt-[11px] pl-[11px] z-40  transition-all  text-center text-4xl font-bold tracking-tighter w-12 h-12 rounded-full border border-stone-100 bg-gradient-to-t from-stone-200 to-white shadow-lg">
                <PlusIcon/>
                </div>
            </div>
            
            </div>

            <p className="md:w-1/2 md:mx-auto mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            This futuristic tool can see your inner beauty, and able to reconstruct it in stunning photos. Just like a real photographer.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-9 auto-cols-max"> 


                <div className="col-span-7 relative pt-9 pb-9 transition-all grid grid-cols-6 gap-4">

                        <div className="z-40 absolute -top-2 left-0 w-full h-9 text-left">
                            <span className="text-xs text-stone-600 font-normal">These are AI generated photos based on the characteristics of a real person.</span>
                        </div>

                        
                        <Image
                            className="shadow-md rounded-sm hover:scale-110 transition ease-in-out"
                            height="1280"
                            width="1024"
                            alt="hello"
                            src="/v6.jpg"
                        />
                        
                        <Image
                            className="shadow-md rounded-sm hover:scale-110 transition ease-in-out"
                            height="1280"
                            width="1024"
                            alt="hello"
                            src="/v7.jpg"
                        />
                        <Image
                            className="shadow-md rounded-sm hover:scale-110 transition-transform ease-in-out"
                            height="1280"
                            width="1024"
                            alt="hello"
                            src="/v8.jpg"
                        />
                        <Image
                            className="shadow-md rounded-sm hover:scale-110 transition ease-in-out"
                            height="1280"
                            width="1024"
                            alt="hello"
                            src="/v9.jpg"
                        />
                        <Image
                            className="shadow-md rounded-sm hover:scale-110 transition ease-in-out"
                            height="1280"
                            width="1024"
                            alt="hello"
                            src="/v10.jpg"
                        />
                        <Image
                            className="shadow-md rounded-sm hover:scale-110 transition ease-in-out"
                            height="1280"
                            width="1024"
                            alt="hello"
                            src="/v11.jpg"
                        />
                </div>

                <div className="col-span-5 relative transition-all text-stone-800 ">

                    
                    <Table className="mt-2">
                        <TableHeader className="bg-stone-100/0 rounded-t-xl">
                            <TableRow className="hover:bg-transparent border-b border-stone-300">
                            <TableHead className="w-[100px] text-stone-600 font-extrabold uppercase">
                                <HoverCard>
                                <HoverCardTrigger className="cursor-pointer">Series *</HoverCardTrigger>
                                <HoverCardContent className="bg-stone-800 text-stone-100 border-b border-stone-400 shadow-xl">
                                1 Series contain 40 generated photos in 5 different scene.
                                </HoverCardContent>
                                </HoverCard>
                            </TableHead>
                            <TableHead className="w-[180px] text-stone-600 font-extrabold uppercase">Generated Photos</TableHead>
                            <TableHead className="w-[80px] text-stone-600 font-extrabold uppercase">Price</TableHead>
                            <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="hover:bg-stone-100/90 border-b border-neutral-300">
                            <TableCell className="text-left">1 Series</TableCell>
                            <TableCell className="text-left">40 photo</TableCell>
                            <TableCell className="text-left">9€</TableCell>
                            <TableCell className="text-left">
                                <Link href="/login">
                                    <Button variant="default" size="sm">Select</Button>
                                </Link>
                            </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-stone-100/90 border-b border-neutral-300">
                            <TableCell className="text-left">3 Series</TableCell>
                            <TableCell className="text-left">3x40 photo</TableCell>
                            <TableCell className="text-left">33€</TableCell>
                            <TableCell className="text-left">
                                <Link href="/login">
                                    <Button variant="default" size="sm">Select</Button>
                                </Link>
                            </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-stone-100/90 border-b border-neutral-300">
                            <TableCell className="text-left">5 Series</TableCell>
                            <TableCell className="text-left">3x40 photo</TableCell>
                            <TableCell className="text-left">53€</TableCell>
                            <TableCell className="text-left">
                                <Link href="/login">
                                    <Button variant="default" size="sm">Select</Button>
                                </Link>
                            </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>

        </div>
      
    </section>
  )
}

export function PlusIcon() {
    return (
        <svg className="w-6 h-6" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
}

export function SparkleIcon() {
    return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
)
}



