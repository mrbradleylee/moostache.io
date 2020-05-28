import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>What?</>,
    imageUrl: "img/responsive.svg",
    description: (
      <>
        Moostache.io is 100% vegan, no animals were harmed in the creation of
        this website. Except maybe the can of SPAM&trade; I ate the other day.
        But really, if you made it this far, you're somewhat curious as to what
        you're reading. This is an ever evolving experiment, and a use case as I
        learn about front end development, and in particular, responsive web
        design.
      </>
    ),
  },
  {
    title: <>Why?</>,
    imageUrl: "img/dev.svg",
    description: (
      <>
        Most of the why has already been covered, but honestly, cause I had an
        rPi laying around and wanted to put it to good use and learn some stuff.
        I always found myself creating docs to store links for resources that I
        need, might as well make a project out of it to document progress and
        expand the junk in my brain. This site initially started as a Wordpress
        site to host random information as I learned about Docker, but as I'm
        learning evolved into what we are now. From Wordpress, we went to
        hosting static pages built with HTML/CSS/love, to playing with static
        site generators as we move on to JavaScript.
      </>
    ),
  },
  {
    title: <>How?</>,
    imageUrl: "img/server.svg",
    description: (
      <>
        The nerdy stuff... Again, two uses cases, the first being learning responsive web design.
        The second is the rPi. Let's talk about the architecture: Front end
        written completely in VSCode/neovim as I go back to my old school vi
        roots. Versioning and commits are managed through GitHub via VSCode. New builds are deployed automagically through CI pipelines via node.js deployment
        scripts. Back end technologies include the host machine, a Raspberry Pi
        2 running Raspbian Stretch. We're served using nginx, with a reverse
        proxy HTTPS redirect, and SSL certs are managed automatically through
        certbot and letsencrypt. Both are leveraging Docker containers, managed
        with Compose for easy configuration changes. To keep track of general
        server health, a TIG stack (Telegraf, InfluxDB, Grafana) is also being
        managed through Docker Compose.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Project website">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("projects/")}
            >
              See My Work
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
