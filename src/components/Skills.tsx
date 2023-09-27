// 'use client'

// import Section from "@/layouts/Section"
// import {useState, useEffect} from "react"
import Skill from "./Skill"


interface SkillItem  {
    name: string,
    image: string
}

interface Props {
    skillItems: SkillItem[]
}

function Skills({ skillItems }: Props ) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5  gap-4 space-y-6 space-x-4">
      {skillItems.map((skillItem: SkillItem )=>(
        <Skill
        key={skillItem.name}
        {...skillItem}
        />
      ))}
    </div>
  )
}

export default Skills