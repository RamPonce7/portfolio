import { useState } from 'react'



export const useConfigApp = () => {


    const [typeTheme, setTypeTheme] = useState<'D' | 'L'>('D')

    const toggleTheme = () => {
        typeTheme === 'D' ?
            setTypeTheme('L') :
            setTypeTheme('D')
    }




    return { toggleTheme, typeTheme }
}
