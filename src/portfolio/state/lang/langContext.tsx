import { createContext, useContext } from 'react'
import { useLang } from './useLang'

const LangContext = createContext<ReturnType<typeof useLang>>(null!)

export const LangProvider = ({ children }: any) => {
    const value = useLang()

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    )
}

export const useLangContext = () => { return useContext(LangContext) }