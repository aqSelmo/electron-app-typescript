import React from 'react'
import { render } from 'react-dom'
import Home from './pages/home'
import { GlobalStyle } from './styles/GlobalStyle'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home/>
    </>
  )
}

render(<App />, mainElement)
