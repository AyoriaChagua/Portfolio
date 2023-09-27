interface Props {
    orientation: "left" | "right"
    title?: string
    text?: string
}

function MyDetail({ orientation, title, text }: Props) {

    const colorOrientations = {
        left: "from-red-500 dark:to-black to-white text-right",
        right: "dark:from-black from-white dark:to-red-500 to-red-500"
    }

    const positionOrientations = {
        left: "",
        right: "flex-col md:flex-row-reverse"
    }

    return (
        <div className={`w-full flex flex-col ${positionOrientations[orientation]} items-center md:flex-row`}>
            <div className={`md:w-3/5 w-full h-full bg-gradient-to-l ${colorOrientations[orientation]} p-16 rounded-2xl md:order-1`}>
                <h3 className="text-4xl text-gray-100">{title}</h3>
            </div>
            <div className="md:w-2/5 h-full p-8 text-gray-500 md:order-2">
                <p>{text}</p>
            </div>
        </div>

    )
}

export default MyDetail