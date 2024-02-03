import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App