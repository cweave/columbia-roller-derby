import React from "react"

import Layout from "../components/layout"
import NewSkaterForm from "../components/new-skater-form"

const IndexPage = () => {
	const url =
		process.env.NODE_ENV === "development" ? process.env.GATSBY_ENV_URL : ""
	fetch(`${url}/api/`)
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
