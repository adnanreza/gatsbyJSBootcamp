import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I'm Adnan Reza. I teach Computer Science and Web Development</p>
      <Link to="/contact">Want to work with me?</Link>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage
