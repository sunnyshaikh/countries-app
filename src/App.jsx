import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Countries />} />
        <Route exact path='/country/:name' element={<Country />} />
      </Routes>
    </div>
  )
}

export default App
