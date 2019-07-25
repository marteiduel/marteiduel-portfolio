import React from "react";
import profilePicture from "../../../static/assets/images/bio/1.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis
        in eu mi bibendum. Libero justo laoreet sit amet cursus sit amet. Sed
        viverra tellus in hac habitasse. Nullam non nisi est sit amet facilisis
        magna etiam tempor. Vitae ultricies leo integer malesuada nunc. Est
        placerat in egestas erat imperdiet sed. At elementum eu facilisis sed
        odio. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
        Sit amet volutpat consequat mauris nunc congue nisi vitae. A erat nam at
        lectus urna duis convallis. Tellus integer feugiat scelerisque varius
        morbi enim. Dignissim convallis aenean et tortor at risus. At urna
        condimentum mattis pellentesque id nibh tortor.
      </div>
    </div>
  );
}
