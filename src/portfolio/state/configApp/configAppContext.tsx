import { createContext, useContext } from 'react'
import { useConfigApp } from './useConfigApp'




const ConfigAppContext = createContext<ReturnType<typeof useConfigApp>>(null!)

export const ConfigAppProvider = ({ children }: any) => {
    const value = useConfigApp()

    return (
        <ConfigAppContext.Provider value={value}>
            {children}
        </ConfigAppContext.Provider>
    )
}

export const useConfigAppContext = () => useContext(ConfigAppContext)