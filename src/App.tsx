import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import PopularRecipes from './pages/PopularRecipes';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<HomePage />} />
        <Route path="/Popular" element={<PopularRecipes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App