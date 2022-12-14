import React,{ createContext, useEffect, useReducer } from "react"
import { Appearance, AppState, useColorScheme } from "react-native"
import { lightTheme, themeReducer, ThemeState, darkTheme } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState
    setDarkTheme: () => void
    setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}:any) =>{

    const colorScheme = useColorScheme()

    const [theme, dispatch] = useReducer( themeReducer, colorScheme === 'dark' ? darkTheme :lightTheme )
    // const [theme, dispatch] = useReducer( themeReducer, Appearance.colorScheme === 'dark' ? darkTheme :lightTheme )

    useEffect(() => {
        //old way according to the course
        // AppState.addEventListener('change',(status)=>{
        //     if(status === 'active'){

        //         Appearance.getColorScheme() === 'light'
        //         ? setLightTheme()
        //         : setDarkTheme()
        //     }
        // })

      colorScheme === 'light'
      ? setLightTheme()
      : setDarkTheme()
    }, [colorScheme])
    

    const setDarkTheme = () => {
        dispatch({type:'set_dark_theme'})
    }

    const setLightTheme = () => {
        dispatch({type:'set_light_theme'})
    }

    return (
        <ThemeContext.Provider value={{theme,setDarkTheme,setLightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}