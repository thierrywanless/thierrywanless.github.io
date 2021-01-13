import * as React from "react";
import Header from "../components/header";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <h1 id="about">About</h1>
      <h1 id="skills">Skills</h1>
      <h1 id="projects">Projects</h1>
      <h1 id="contact">Contact</h1>
    </Layout>
  );
};

export default IndexPage;
