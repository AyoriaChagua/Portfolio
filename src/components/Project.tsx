'use client'
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

import Image from "next/image"
import Button from "./Button"
import { useState } from "react"

interface Props {
  name: string,
  resume: string,
  description: string,
  image: string,
  tools: string[],
  gitlink: string
}

function Project({ name, resume, description, image, tools, gitlink }: Props) {
  const [isShowing, setIsShowing] = useState(false)
  const handleButton = (isShow: boolean) => {
    if (isShow) return <BiUpArrow onClick={() => setIsShowing(!isShowing)} className={`text-red-700  cursor-pointer`} />
    else return <BiDownArrow onClick={() => setIsShowing(!isShowing)} className={`text-red-700  cursor-pointer`} />

  }
  return (
    <div className={`w-full grid flex-col md:grid-cols-2 items-center justify-center space-x-20 space-y-10`}>
      <div>
        <Image src={image} alt="this is test" className="w-full rounded-xl shadow-xl shadow-gray-400 border-2 border-gray-400" width={800} height={450} />
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl">{name}</h3>
        <p className="font-thin">{resume} </p>
        <p className={`${isShowing ? "block font-normal" : "hidden"}`}>{description}</p>
        {handleButton(isShowing)}
        <Button text="Git Hub Link" type="chgMode" onClick={() => { window.open(gitlink, "_blank") }} />
        <h5>Tools used</h5>
        <ul className={`list-disc pl-4  font-thin ${isShowing ? "grid grid-cols-3 md:grid-cols-6" : "grid grid-cols-2"}`}>
          {tools.map(tool => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Project