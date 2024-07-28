import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./createBlog";
import Blogs from "./blog";
import BlogDetail from "./BlogDetails";
import "bootstrap/dist/css/bootstrap.min.css";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (title, body) => {
    const newBlog = {
      id: blogs.length + 1,
      title,
      body,
    };
    setBlogs([...blogs, newBlog]);
  };

  console.log(blogs);

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogdetails/:userID" element={<BlogDetail />} />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
