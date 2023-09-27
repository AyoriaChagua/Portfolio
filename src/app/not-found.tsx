'use client'

import lottie from "lottie-web"
import { createRef, useEffect } from "react"
import animationData from "../../public/animations/not-found.json"
import ntImg from "../../public/images/introduce/project-present.png"
import Image from "next/image"
export default function NotFound() {
    let animationContainer = createRef<HTMLDivElement>();
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current as Element,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,

        })
        return () => anim.destroy();
    }, [animationContainer])

    return (
        <div className="flex w-full h-screen justify-center items-center flex-col">
            <div className="gap-4">
                <div className="p-10 ">
                    <h1 className="text-6xl font-bold text-center ">Page not found</h1>
                </div>
                <div className="flex sm:flex-col md:flex-col lg:flex-row justify-center items-center">
                    <div className="p-4 ">
                        <Image src={ntImg} alt="" height={150}></Image>
                    </div>
                    <div className="p-4 ">
                        <div ref={animationContainer} className="h-40"></div>
                    </div>
                </div>
            </div>
        </div>)
}