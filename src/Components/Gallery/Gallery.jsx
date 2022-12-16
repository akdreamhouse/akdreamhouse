import SimpleGallery from "./SimpleGallery";

import React from "react";

function Gallery(props) {
  return (
    <div>
      <SimpleGallery
        galleryID="my-test-gallery"
        images={props.images && props.images}
      />
    </div>
  );
}

export default Gallery;
