import React from 'react'
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudiesPage from './pages/StudiesPage'
import StudyPage from './pages/StudyPage'
import FormsPage from './pages/FormsPage'
import FormPage from './pages/FormPage'
import DataPage from './pages/DataPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/studies">
              <StudiesPage />
            </Route>
            <Route path="/study/:studyName">
              <StudyPage />
            </Route>
            <Route path="/forms">
              <FormsPage />
            </Route>
            <Route path="/form/:formName">
              <FormPage />
            </Route>
            <Route path="/data">
              <DataPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
  )
}

export default App