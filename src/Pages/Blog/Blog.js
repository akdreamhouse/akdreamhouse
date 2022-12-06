import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";

// manual modules

function BlogPage() {
  useEffect(() => {
    document.title = "A.K. Dream House - Blog";
  }, []);

  return (
    <div className="Portfolio">
      <Loader />
    </div>
  );
}

export default BlogPage;
