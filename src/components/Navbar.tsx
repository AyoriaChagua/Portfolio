'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/images/logo.png"
import close from "../../public/svg/close.svg"
import hamburger from "../../public/svg/hamburger.svg"
import ToggleButton from "@/components/ToggleButton"
import { useState } from "react"
import { links } from "@/mockData/links"

export default function Navbar() {
    const [navbar, setNavbar] = useState<boolean>(false)
    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between px-2 sm:px-3 md:px-4 lg:px-32 py-3 bg-white dark:bg-black z-40">
            <div className={`w-full justify-between`}>
                <div className="flex flex-row">
                    <div className="border-2 border-red-700 rounded-full p-1.5">
                        <Link href="/#">
                            <Image src={logo} alt="AyoriaXch" height={45} width={45} className="my-0.5" />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center ml-5">
                        <div className="rounded-full p-1 bg-red-400 h-1 m-2"></div>
                        <div className="rounded-full p-1 bg-red-500 h-1 m-2"></div>
                        <div className="rounded-full p-1 bg-red-700 h-1 m-2"></div>
                    </div>
                    <div className="w-full flex items-center">
                        <hr className="w-full border-gray-500 mr-3" />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => { setNavbar(!navbar) }}>
                                {navbar ? (
                                    <Image src={close} alt="" height={45} />
                                ) : (
                                    <Image src={hamburger} alt="" height={45} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:block ${navbar ? 'block' : 'hidden'}`}>
                <ul className={`md:flex text-gray-500 text-xl`} style={{ whiteSpace: 'nowrap' }}>
                    {links.map((link) => (
                        <li className="mb-3 ml-4 md:ml-10   mt-2 w-full" key={link.text}>
                            <Link href={link.href} className="hover:text-red-700">{link.text}</Link>
                        </li>
                    ))}
                    <li className="mb-3 ml-4 md:ml-10  mt-2"><ToggleButton /></li>
                </ul>
            </div>

        </nav>
    )
}
