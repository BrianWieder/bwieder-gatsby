import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

const AboutPage: React.FC = () => (
  <div>
    <SEO title="About" />
    <h1>About Me!</h1>
    <p>I am a Computer Science Student at Virginia Tech!</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default AboutPage;
