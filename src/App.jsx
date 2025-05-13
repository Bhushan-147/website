import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import BlogParent from "./pages/blog/BlogParent";
import Fashion from './pages/blog/Fashion';
import Makeup from './pages/blog/Makeup';
import Haircare from './pages/blog/Haircare';
import Fitness from './pages/blog/Fitness';
import Places from './pages/blog/Places';
import CollaborateParent from './pages/collaborate/CollaborateParent';
import Agency from './pages/collaborate/Agency';
import Model from './pages/collaborate/Model';
import Company from './pages/collaborate/Company';
import DualFeatureSection from "./components/DualFeatureSection";
import '@fontsource/poppins'; // Default weight 400
import '@fontsource/poppins/600.css'; // Optional weights

// import  CollaborateParent  from './pages/collaborate/CollaborateParent';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Portfolio Route */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />

        {/* Blog Parent Route with Nested Routes */}
        <Route path="/blog" element={<BlogParent />}>
          <Route path="fashion" element={<Fashion />} />
          <Route path="makeup" element={<Makeup />} />
          <Route path="haircare" element={<Haircare />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="places" element={<Places />} />
        </Route>

        {/* Collaborate Parent Route with Nested Routes */}
        {/* <Route path="/collaborate" element={<CollaborateParent />}> */}
        <Route path="/collaborate/agency" element={<CollaborateParent />}>
          <Route path="agency" element={<Agency />} />
          <Route path="model" element={<Model />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>

      <DualFeatureSection />
      <Footer />
    </Router>
  );
}

export default App;
