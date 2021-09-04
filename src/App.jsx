import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Slider from './components/Slider/Slider'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </>
  )
}

export default App
