import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from "./Pages/Kids"
import About from './Pages/About';
import Products from './Pages/Product'
import Contact from './Pages/Contact'
import FeaturesPage1 from './Pages/Feature_1'
import FeaturesPage2 from './Pages/Feature_2'
import FeaturesPage3 from './Pages/Feacture_3'
import Explore from './Pages/Explore';
import Footer from './Components/Footer/Footer';
import ProductSection from './Components/ProductSection/ProductSection'
import PostProduct from './Components/Admin/components/PostForm/PostProduct';
import AdminHome from './Components/Admin/Landingpage/AdminHome'
import ManageProducts from './Components/Admin/components/ManageProducts/ManageProducts';
import Login from './login/login'
import Signup from './login/signup';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<AdminHome/>}/>
          <Route path="/admin/manage-products" element={<ManageProducts/>}/>
          <Route path="/productsSection" element={<ProductSection/>}/>
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/single-product" element={<PostProduct />} /> */}
          <Route path="/admin/post-products" element={<PostProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features/page-1" element={<FeaturesPage1 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addToCart" element={<Explore />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
