import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import PopularRecipes from './pages/PopularRecipesPage/PopularRecipes';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SumbissionForm from './pages/SubmissionFormPage/SubmissionForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<HomePage />} />
        <Route path="/Popular" element={<PopularRecipes />} />
        <Route path="/Add-Your-Own" element={<SumbissionForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App