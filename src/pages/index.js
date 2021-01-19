import * as React from "react";

import About from "../components/about";
import Header from "../components/header";
import Layout from "../components/layout";
import ProjectList from "../components/projectList";
import Skills from "../components/skills";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Skills />
      <ProjectList />
    </Layout>
  );
};

export default IndexPage;
