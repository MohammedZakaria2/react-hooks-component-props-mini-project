import React from "react";

function About({about, image}) {
  return (
    <main className="about">
      <img src={image} alt="blog logo" />
      <aside></aside>
      <p>{about}</p>
    </main>
  );
}

About.defaultProps= {
  image:  "https://via.placeholder.com/215"
}

export default About;
