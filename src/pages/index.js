import React from "react"

import Layout from "../components/layout"
import NewSkaterForm from "../components/new-skater-form"

const IndexPage = () => {
  fetch("http://localhost:3001/api/")
    .then((data) => data.json())
    .then((data) => {
      console.log("dattttta", data)
    })
  return (
    <Layout>
      <div className="book-container">
        <h1>New Columbia Skaters</h1>

        <NewSkaterForm />
      </div>
    </Layout>
  )
}

export default IndexPage
