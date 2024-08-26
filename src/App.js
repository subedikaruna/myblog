import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllBlogs from "./pages/AllBlogs";
import SingleBlog from "./pages/SingleBlog";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBlogs></AllBlogs>} />
        <Route path="/single-blog" element={<SingleBlog></SingleBlog>} />
        <Route path="/create-blog" element={<CreateBlog></CreateBlog>} />
        <Route path="/edit-blog" element={<EditBlog></EditBlog>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
