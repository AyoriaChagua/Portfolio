interface Props {
    text: string
    type?: "chgMode" | "primary" | "secondary";
    onClick?: () => void;
}

function Button({ text, type = "primary", onClick }: Props) {
    const types = {
        primary: "bg-red-500 text-gray-100 dark:text-red-100 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-800 ",
        secondary: "bg-red-800 text-gray-100 dark:text-red-100 hover:bg-red-600 text-gray-100  ",
        chgMode: "dark:bg-black bg-white  dark:hover:bg-red-900 dark:hover:text-red-100 hover:bg-red-400 "
    }

    return (
        <button
            aria-label={text}
            className={
                `${types[type]} dark:text-red-800  py-2 px-3         
            rounded-tr-md 
            rounded-bl-md 
            dark:border-red-600
            border-red-700 
            font-semibold
            border-2`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button