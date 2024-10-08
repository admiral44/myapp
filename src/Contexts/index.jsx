import React, { createContext, useState } from 'react'

const initialContext = {
    theme: [],
    setTheme: () => {},
    isLoading: false,
    setIsLoading: () => {},
    accessToken: null,
    setAccessToken: () => {},
    userLogin: () => {},
    userLogout: () => {},
    userDetails: [],
    setUserDetails: () => {},
}

export const mainContext = createContext(initialContext)

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialContext.theme)
    const [isLoading, setIsLoading] = useState(initialContext.isLoading)
    const [accessToken, setAccessToken] = useState(initialContext.accessToken)
    const [userDetails, setUserDetails] = useState(initialContext.userDetails)
    
    const userLogin = () => {
        setIsLoading(true);
        setAccessToken('kajhsdkjhakjs');

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    const userLogout = () => {
        setIsLoading(true);
        setAccessToken(null);

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    return (
        <>
            <mainContext.Provider value={{
                theme,
                setTheme,
                isLoading,
                setIsLoading,
                accessToken,
                setAccessToken,
                userLogin,
                userLogout
            }}>
                {children}
            </mainContext.Provider>
        </>
    )
}

export default ThemeProvider;