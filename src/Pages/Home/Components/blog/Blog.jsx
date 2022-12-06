import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import "./blog.css";
import Article from "./../../Components/article/Article";

const Blog = (props) => (
  <div className="ak__blog section__padding" id="blog">
    <div className="ak__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="ak__blog-container">
      <div
        onClick={() => props.navigate("/blog")}
        className="ak__blog-container_groupA"
      >
        <Article
          imgUrl={blog01}
          date="Nov 19, 2022"
          text="Residence Creativity Redesigned Into 'The Brown Envelope'"
        />
      </div>
      <div
        className="ak__blog-container_groupB"
        onClick={() => props.navigate("/blog")}
      >
        <Article
          imgUrl={blog02}
          date="Nov 19, 2022"
          text="‘THE GULLY HOME’ IS AN EMBODIMENT OF CLIMATE RESPONSIVE AND FUNCTIONAL DESIGN PRINCIPLES"
        />
        <Article
          imgUrl={blog03}
          date="Nov 19, 2022"
          text="SLOW & EASY LIVING WITH CONTEMPORARY LANDSCAPES & TRADITIONAL LIVING SPACES"
        />
        <Article
          imgUrl={blog04}
          date="Nov 19, 2022"
          text="Colorful Office Spaces. Let AK Dream House exlore how it is?"
        />
        <Article
          imgUrl={blog05}
          date="Nov 19, 2022"
          text="Neo-Classical Style Of Design Diluted With Modern Elements"
        />
      </div>
    </div>
  </div>
);

export default Blog;
