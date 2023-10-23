import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Team from "./pages/Team";
import Page404 from "./pages/Page404";
import AuthRoutes from "./routes/AuthRoutes";
import Basket from "./pages/Basket";
import ProductDetails from "./components/ProductDetails";
import NewReview from "./components/NewReview";
import Reviews from "./components/Reviews";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

     <ToastContainer/>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/newreview" element={<NewReview />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route element={<AuthRoutes />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
     
    </>
  );
}

export default App;
