const { createProxyMiddleware } = require("http-proxy-middleware")

require("dotenv").config({
	path: ".env",
})

module.exports = {
	proxy: {
		prefix: "/api",
		url: "http://localhost:3001",
	},
	siteMetadata: {
		title: `Columbia Roller Derby`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
		siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
	},

	plugins: [
		`gatsby-plugin-netlify`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-nodejs`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			// The name of the plugin
			resolve: "gatsby-source-mongodb",
			options: {
				// Name of the database and collection where are books reside
				dbName: "columbia-roller-derby",
				collection: "rookies",
				connectionString: process.env.CRD_DATABASE_NAME,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
