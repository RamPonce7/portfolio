import { useState } from 'react'



export const useConfigApp = () => {

    const [page, setPage] = useState<'Portfolio' | 'Experience'>('Portfolio')
    const [typeTheme, setTypeTheme] = useState<'D' | 'L'>('L')

    const toggleTheme = () => {
        typeTheme === 'D' ?
            setTypeTheme('L') :
            setTypeTheme('D')
    }




    return { toggleTheme, typeTheme, page, setPage }
}
