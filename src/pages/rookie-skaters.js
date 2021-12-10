import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import DerbyTable from "../components/table"

const RookieSkaters = props => {
  const rookies = props.data.allMongodbColumbiarollerderbyRookies.edges

  return (
    <Layout>
      <Link to="/">Go back to the homepage</Link>
      <div className="book-container">
        <DerbyTable data={rookies} />
      </div>
    </Layout>
  )
}

export default RookieSkaters

export const pageQuery = graphql`
  query {
    allMongodbColumbiarollerderbyRookies {
      edges {
        node {
          id
          name
          derby_name
          email
          phone
          street_address
          city
          state
          county
          birthday
          number
          zip_code
          member_status
          yearly_waiver_status
        }
      }
    }
  }
`
