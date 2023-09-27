import Project from "./Project"


interface ProjectItem {
    name: string,
    resume: string,
    description: string,
    image: string,
    tools: string[],
    gitlink: string
}

interface Props {
    projectItems: ProjectItem[]
}

function Projects({ projectItems }: Props) {
    return (
        <div className="space-y-72 items-center w-full">
            {projectItems.map((projectItem: ProjectItem) => (
                <Project
                    key={projectItem.name}
                    {...projectItem}
                />
            ))}
        </div>
    )
}

export default Projects