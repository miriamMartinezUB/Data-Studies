import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudiesPage from './pages/StudiesPage'
import StudyPage from './pages/StudyPage'
import FormsPage from './pages/FormsPage'
import FormPage from './pages/FormPage'
import DataPage from './pages/DataPage'
import NotFoundPage from './pages/NotFoundPage'
import ReportsPage from "./pages/ReportsPage";
import NotImplementedPage from "./pages/NotImplementedPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/studies">
                    <StudiesPage/>
                </Route>
                <Route path="/study/:studyName/form/:formName/reports">
                    <ReportsPage/>
                </Route>
                <Route path="/study/:studyName/forms">
                    <FormsPage/>
                </Route>
                <Route path="/not/implemented">
                    <NotImplementedPage/>
                </Route>
                <Route path="/data">
                    <DataPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App