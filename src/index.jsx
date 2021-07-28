import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
