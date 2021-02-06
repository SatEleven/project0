import { NavigationContainer } from '@react-navigation/native'
import React from "react"

// Navigatiors Footer
import Main from './src/Navigators/Main'

export default function App() {
  return (
    <NavigationContainer>
        <Main />
    </NavigationContainer>
  )
}