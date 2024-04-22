import React, { createContext, useState } from 'react'

const initialContext = {
    theme: [],
    setTheme: () => {},
    userRegistration: [],
    setUserRegistration: () => {},
    isLoading: false,
    setIsLoading: () => {},
    accessToken: null,
    setAccessToken: () => {}
}

export const mainContext = createContext(initialContext)

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialContext.theme)
    const [userRegistration, setUserRegistration] = useState(initialContext.userRegistration)
    const [isLoading, setIsLoading] = useState(initialContext.isLoading)
    const [accessToken, setAccessToken] = useState(initialContext.accessToken)

    return (
        <>
            <mainContext.Provider value={{
                theme,
                setTheme,
                userRegistration,
                setUserRegistration,
                isLoading,
                setIsLoading,
                accessToken,
                setAccessToken
            }}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default ThemeProvider;