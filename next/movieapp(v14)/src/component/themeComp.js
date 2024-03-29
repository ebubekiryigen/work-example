"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


export default function ThemeComp() {
    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themMode = theme === 'system' ? systemTheme : theme

    return (
      <div>
        {
            mounted && (
                themMode == 'dark' ?
                <CiLight onClick={() => setTheme('light')} className="cursor-pointer" size={25} /> :
                <CiDark onClick={() => setTheme('dark')} className="cursor-pointer" size={25} />
            )
        }
      </div>
    );
  }