import { createContext, useContext } from "react"

//Theme Context
export const ThemeContext = createContext()
export function useThemeContext () {
    const theme = useContext(ThemeContext)

    return theme
}

//Language Context
export const LanguageContext = createContext()
export function useLanguageContext () {
    const language = useContext(LanguageContext)

    return language
}