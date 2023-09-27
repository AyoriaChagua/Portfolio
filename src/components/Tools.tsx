import Tool from "./Tool"
import { IconType } from "react-icons/lib"

interface ToolItem {
    icon: IconType,
    title: string,
    description: string,
    tls: string[]
}

interface Props {
    toolsItems: ToolItem[]
}


function Tools({ toolsItems }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-white dark:bg-black rounded-2xl p-14  top-auto left-1/2 transform  -translate-y-1/4 md:-translate-y-1/2 font-normal mx-5 md:mx-32 text-gray-400">
            {toolsItems.map((tool: ToolItem) => (
                <Tool 
                    key={tool.title}
                    {...tool}
                />
            ))}
        </div>
    )
}

export default Tools