import './App.css'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Filter from './components/Filter'

function App() {

  return (
    <>
      <Header/>
      <h1 className="title"><em>Alex's Recipes</em></h1>
      <ImageSlider/>
      <Filter/>
    </>
  )
}

export default App