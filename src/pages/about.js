import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm Adnan Reza. I teach Computer Science and Web Development</p>
      <Link to="/contact">Want to work with me?</Link>
    </div>
  )
}

export default AboutPage
