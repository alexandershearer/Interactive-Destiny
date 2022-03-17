import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, Link, useLocation } from "react-router-dom"
import Main from "./components/Main";
import StoryPage from "./components/Story";
import VendorsPage from "./components/Vendors";


function App() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="crafting" />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
