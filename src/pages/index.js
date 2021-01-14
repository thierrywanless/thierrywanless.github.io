import * as React from "react";

import About from "../components/about";
import Header from "../components/header";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <About />
      <h1 id="skills">Skills</h1>
      <h1 id="projects">Projects</h1>
      <h1 id="contact">Contact</h1>
    </Layout>
  );
};

export default IndexPage;
