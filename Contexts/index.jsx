import React, { createContext, useState } from 'react'

const initialContext = {
    theme: [],
    setTheme: () => {},
    userRegistration: [],
    setUserRegistration: () => {},
}

export const mainContext = createContext(initialContext)

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialContext.theme)
    const [userRegistration, setUserRegistration] = useState(initialContext.userRegistration)

    return (
        <>
            <mainContext.Provider value={{
                theme,
                setTheme,
                userRegistration,
                setUserRegistration
            }}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default ThemeProvider;