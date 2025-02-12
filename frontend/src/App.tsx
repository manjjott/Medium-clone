import "./App.css";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Blog from "./components/blog";
import "./index.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
