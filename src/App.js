import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import InitializeApp from './login/InitializeApp';

// Lazy loading for all other components
const Home = lazy(() => import('./Pages/Home'));
const Men = lazy(() => import('./Pages/Men'));
const Women = lazy(() => import('./Pages/Women'));
const Kids = lazy(() => import('./Pages/Kids'));
const About = lazy(() => import('./Pages/About'));
const Products = lazy(() => import('./Pages/Product'));
const Contact = lazy(() => import('./Pages/Contact'));
const FeaturesPage1 = lazy(() => import('./Pages/Feature_1'));
const Explore = lazy(() => import('./Pages/Explore'));
const ProductSection = lazy(() => import('./Components/ProductSection/ProductSection'));
const PostProduct = lazy(() => import('./Components/Admin/components/PostForm/PostProduct'));
const AdminHome = lazy(() => import('./Components/Admin/Landingpage/AdminHome'));
const ManageProducts = lazy(() => import('./Components/Admin/components/ManageProducts/ManageProducts'));
const Login = lazy(() => import('./login/login'));
const Signup = lazy(() => import('./login/signup'));
const ListingPage = lazy(()=> import("./Pages/ProductListing"))

function App() {
  return (
    <div className="App">
      <InitializeApp />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<AdminHome />} />
          <Route path="/admin/manage-products" element={<ManageProducts />} />
          <Route path="/productsSection" element={<ProductSection />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin/post-products" element={<PostProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features/page-1" element={<FeaturesPage1 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addToCart" element={<Explore />} />
          <Route path="/listingpage" element={<ListingPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
