'use client'
import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { FaSun, FaMoon } from "react-icons/fa"

export default function ToggleButton() {

    const [enabled, setEnabled] = useState(false)
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html')?.classList.add('dark')
        }else{
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    }

    return (
        <label className='flex items-center space-x-2'>
            <FaSun className='text-red-700 dark:text-gray-400'/>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'border-2 border-red-700' :  'border-2 border-red-800 bg-red-600'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                onClick={handleChangeTheme}
            >
                <span
                    className={`${enabled ? 'translate-x-6  bg-red-700 ' : 'translate-x-1 bg-white'
                        } inline-block h-4 w-4 transform rounded-full transition`}
                />
            </Switch>
           <FaMoon className='dark:text-red-700' />
        </label>
    )
}
