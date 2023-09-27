
import { GiPencilRuler } from "react-icons/gi"
import { AiOutlineCode } from "react-icons/ai"
import { SiAzuredevops } from "react-icons/si"

function Tools() {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-white dark:bg-black rounded-2xl p-14  top-auto left-1/2 transform  -translate-y-1/4 md:-translate-y-1/2 font-normal mx-32 text-gray-400">
            <div className="flex flex-col items-center space-y-10 ">
                <div className="rounded-full bg-indigo-600 p-6 dark:text-blue-950 text-white">
                    <GiPencilRuler className="text-4xl" />
                </div>
                <div className="space-y-3">
                    <h4 className=" font-semibold  text-xl">Designer</h4>
                    <p >I believe that simple and clean designs are the best, user experience and interactive interfaces</p>
                </div>
                <div className="space-y-3">
                    <h4 className="text-red-600">Design Tools</h4>
                    <ul className="space-y-3">
                        <li>Figma</li>
                        <li>PhotoShop</li>
                        <li>Font awesome</li>
                        <li>Tailwind</li>
                        <li>React icons</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-10">
                <div className="rounded-full bg-indigo-600 dark:text-blue-950 text-white p-6">
                    <SiAzuredevops className="text-4xl" />
                </div>
                <div className="space-y-3">
                    <h4 className=" font-semibold  text-xl">DevOps</h4>
                    <p>I like to integrate all my knowledge with automation and virtualization operations, I love both worlds</p>
                </div>
                <div className="space-y-3">
                    <h5 className="text-red-600">DevOps Tools</h5>
                    <ul className="space-y-3">
                        <li>Next JS</li>
                        <li>Express</li>
                        <li>Bootstrap</li>
                        <li>Django</li>
                        <li>Laravel</li>
                        <li>Spring boot</li>
                        <li>Github</li>
                        <li>Terminal</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-10">
                <div className="rounded-full bg-indigo-600 p-6 dark:text-blue-950 text-white">
                    <AiOutlineCode className="text-4xl" />
                </div>
                <div className="space-y-3">
                    <h4 className=" font-semibold text-xl">Software developer</h4>
                    <p>I have developed several projects of different types, using different technologies.</p>
                </div>
                <div className="space-y-3">
                    <h5 className="text-red-600">Dev Tools</h5>
                    <ul className="space-y-3">
                        <li>Next JS</li>
                        <li>Express</li>
                        <li>Bootstrap</li>
                        <li>Django</li>
                        <li>Laravel</li>
                        <li>Spring boot</li>
                        <li>Github</li>
                        <li>Terminal</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tools