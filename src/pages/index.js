import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello</h1>
        <h2>
          I'm Adnan, a web development instructor, living in Vancouver, BC.
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact Me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
