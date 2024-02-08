import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from "./Pages/Kids"
import About from './Pages/About';
import Products from './Pages/Product'
import SingleProduct from './Pages/SingleProduct'
import Contact from './Pages/Contact'
import FeaturesPage1 from './Pages/Feature_1'
import FeaturesPage2 from './Pages/Feature_2'
import FeaturesPage3 from './Pages/Feacture_3'
import Explore from './Pages/Explore';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features/page-1" element={<FeaturesPage1 />} />
          <Route path="/features/page-2" element={<FeaturesPage2 />} />
          <Route path="/features/page-3" element={<FeaturesPage3 />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
