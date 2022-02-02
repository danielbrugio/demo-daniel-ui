import React from 'react'
import './app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ButtonDemo } from './components/ButtonDemo'
import { GettingStarted } from './components/GettingStarted'
import { TextInputDemo } from './components/TextInputDemo'
import { NumberInputDemo } from './components/NumberInputDemo'
import { SelectDemo } from './components/SelectDemo'
import { AutocompleteDemo } from './components/AutocompleteDemo'
import { Theming } from './components/Theming'
import { TextAreaDemo } from './components/TextAreaDemo'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { DividerDemo } from './components/DividerDemo'

function App() {
  const theme = useSelector((state) => state)

  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Router>
          <Navbar />
          <div className='main'>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/gettingstarted' />
              </Route>
              <Route path='/button' element={ButtonDemo} />
              <Route path='/gettingstarted' element={GettingStarted} />
              <Route path='/textinput' element={TextInputDemo} />
              <Route path='/numberinput' element={NumberInputDemo} />
              <Route path='/select' element={SelectDemo} />
              <Route path='/autocomplete' element={AutocompleteDemo} />
              <Route path='/theming' element={Theming} />
              <Route path='/divider' element={DividerDemo} />
              <Route path='/textarea' element={TextAreaDemo} />
              <Route />
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App