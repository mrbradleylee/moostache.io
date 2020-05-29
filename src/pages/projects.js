import React from "react";
import Layout from "@theme/Layout";

function Projects() {
  return (
    <Layout title="Projects">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          fontSize: "20px",
          margin: "0 5% 0 5%",
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
      </div>
    </Layout>
  );
}

export default Projects;
