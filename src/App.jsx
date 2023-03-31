import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Countries from './components/Countries'
import Country from './components/Country'
import NotFound from './components/NotFound'

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Countries />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
