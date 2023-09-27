
import { AiOutlineCode } from "react-icons/ai"
import { IconType } from "react-icons/lib"

interface Props {
    icon: IconType,
    title: string,
    description: string,
    tls: string[]
}

function Tool({ icon = AiOutlineCode, title, description, tls }: Props) {
    const IconComponent = icon;
    return (
        <div className="flex flex-col items-center space-y-10 ">
            <div className="rounded-full bg-indigo-600 p-6 dark:text-blue-950 text-white">
                <IconComponent className="text-4xl"/>
            </div>
            <div className="space-y-3">
                <h4 className=" font-semibold  text-xl">{title}</h4>
                <p >{description}</p>
            </div>
            <div className="space-y-3">
                <h4 className="text-red-600">Tools</h4>
                <ul className="space-y-3">
                    {tls.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tool