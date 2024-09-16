import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllBlogs from "./pages/blog/AllBlogs";
import SingleBlog from "./pages/blog/SingleBlog";
import CreateBlog from "./pages/blog/CreateBlog";
import EditBlog from "./pages/blog/EditBlog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Tabs from "./components/tab/Tabs";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllBlogs></AllBlogs>} />
          <Route path="/single-blog/:id" element={<SingleBlog></SingleBlog>} />
          <Route path="/create-blog" element={<CreateBlog></CreateBlog>} />
          <Route path="/edit-blog/:id" element={<EditBlog></EditBlog>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/tabs" element={<Tabs></Tabs>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
