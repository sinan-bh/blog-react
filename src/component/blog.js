import React, { useContext } from "react";
import {   useNavigate } from "react-router-dom";
import { BlogContext } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";


function Blogs() {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate()

  return (
    <div className="container mt-5">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.body}</p>
            <button  className="btn btn-primary" onClick={()=>navigate(`/blogdetails/${blog.id}`)}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
