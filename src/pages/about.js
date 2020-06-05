import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <p>I'm Adnan Reza. I teach Computer Science and Web Development</p>
        <Link to="/contact">Want to work with me?</Link>
      </div>
    </Layout>
  )
}

export default AboutPage
