import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./App";

function BlogDetail() {
  const { blogs } = useContext(BlogContext);
  const { userID } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(userID));

  console.log(blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container card mt-5">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetail;
