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


function App() {
  return (
    <div className="App">
       <Router>
            <Header />
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/men" component={Men} />
                <Route path="/women" component={Women} />
                <Route path="/kids" component={Kids} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/single-product" component={SingleProduct} />
                <Route path="/contact" component={Contact} />
                <Route path="/features/page-1" component={FeaturesPage1} />
                <Route path="/features/page-2" component={FeaturesPage2} />
                <Route path="/features/page-3" component={FeaturesPage3} />
                <Route path="/explore" component={Explore} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
