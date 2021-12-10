import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import NewSkaterForm from "../components/new-skater-form"

const IndexPage = () => {
  return (
    <Layout>
      <div className="book-container">
        <h1>Columbia Roller Derby</h1>
        <Link to="rookie-skaters">Rookie Skaters</Link>

        <NewSkaterForm />
      </div>
    </Layout>
  )
}

export default IndexPage
