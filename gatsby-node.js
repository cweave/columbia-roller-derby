exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
		type allMongodbColumbiarollerderbyRookies implements Node {
			id: ID!,
			name: String,
			derby_name: String,
			email: String,
			phone: String,
			street_address: String,
			city: String,
			state: String,
			county: String,
			birthday: String,
			number: String,
			zip_code: String,
			skater_type: String,
			yearly_waiver_status: String
		}
	`
}
