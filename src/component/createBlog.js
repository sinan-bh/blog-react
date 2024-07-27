import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "./App";

function CreateBlog() {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/blogs");
  };

  const click = () => {
    alert('Blog Created')
    addBlog(title, body);
    setTitle('')
    setBody('')
  }

  return (
    <div className="container mt-5">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Blogs</button>
        <button type="button" className="btn btn-primary" onClick={click}>CreateBlog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
