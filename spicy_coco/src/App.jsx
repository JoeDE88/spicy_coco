import './App.css'
import {Routes, Route } from 'react-router'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import { routesConfig } from './routes/routesConfig'

function App() {
  return (
    <>
    <Routes>
      {routesConfig.map((page) => {
        return (
          <Route
          key={page.name}
          path={page.path}
          element={page.component}
          />
        )
      })}
    </Routes>
    </>
  )
}

export default App
