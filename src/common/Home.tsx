import ProfileHeader from "@/components/ProfileHeader"
import MyDetail from "@/components/MyDetail"
import Section from "@/layouts/Section"
import Skills from "@/components/Skills"
import Image from "next/image"
import { skills } from "@/mockData/skills"
import { projects } from "@/mockData/projects"
import skill from "@/../public/images/introduce/skills.png"
import Projects from "@/components/Projects"
import About from "@/components/About"

function Home() {
    return (
        <div>
            <Section id="profile">
                <ProfileHeader />
            </Section>
            <About />
            <Section id="values" >
                <div className="sm:spacey-15 md:space-y-20 lg:space-y-28  xl:space-y-36">
                    <MyDetail orientation="left" title="About Me" text="I am Ayoria Chagua, a software developer technician with extensive back-end and front-end knowledge. I also have knowledge in Databases, Cloud Computing and many more" />
                    <MyDetail orientation="right" title="My Values" text="Among the values ​​that I consider most important are honesty and responsibility since my work is based on both." />
                </div>
            </Section>
            <Section id="skills">
                <h3 className="text-4xl dark:text-gray-100 mb-20 text-center">My Skills</h3>
                <div className="flex flex-col lg:flex-row justify-between items-center max-w-full ">
                    <Skills skillItems={skills} />
                    <div className="p-10 w-4/12 md:block hidden">
                        <Image src={skill} alt="Ayoria Skills"/>
                    </div>
                </div>
            </Section>
            <Section id="projects">
                <h3 className="text-4xl dark:text-gray-100 mb-44 text-center">Projects</h3>
                <Projects projectItems={projects} />
            </Section>
        </div>
    )
}

export default Home