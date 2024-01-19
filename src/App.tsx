
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Question from './pages/question'
import Yes from './pages/yes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/yes!" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
