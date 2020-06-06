import React from "react";
import Layout from "@theme/Layout";

function Projects() {
  return (
    <Layout title="Projects">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "90%",
          padding: "10% 0",
          fontSize: "20px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p>
          Look, I gotta be honest, I haven't made anything yet... Well, besides
          what you're looking at here. As we learn js a bit more, we'll find out
          how to properly format this page and add some projects. For now
          though, here's a link to the{" "}
          <a href="https://moostache.io/v1" target="_blank">
            first version
          </a>
          , which was used to brush up my knowledge on HTML5 and CSS, and learn how to use it to
          create responsive elements.
        </p>
        <p>
          There's also documentation for some fun stuff in the Docs link above, like an Animal Crossing Reference document, and documentation of different exercises that would otherwise clutter my CodePen.
        </p>
        <p>
          Speaking of, feel free to browse my <a href="https://github.com/mrbradleylee" target="_blank">GitHub</a> and <a href="https://codepen.io/mrbradleylee" target="_blank">CodePen</a> as I use those as my playgrounds.
        </p>
      </div>
    </Layout>
  );
}

export default Projects;
