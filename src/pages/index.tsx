import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about">About Me!</Link>
    <br />
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
);

export default IndexPage;
