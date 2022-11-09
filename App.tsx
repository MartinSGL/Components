import React from 'react'
import 'react-native-gesture-handler';
import Navigator from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
        <Navigator/>   
    </ThemeProvider>
   
  )
}

export default App