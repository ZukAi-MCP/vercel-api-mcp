#!/usr/bin/env node

import { promises as fs } from "node:fs"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"

// Get API key from command line arguments
let apiKey = ""

// Check if API key is provided in the format VERCEL_API_KEY=<KEY>
// and if model is provided in the format MODEL=<model>
for (let i = 2; i < process.argv.length; i++) {
	const arg = process.argv[i]
	if (arg.startsWith("VERCEL_API_KEY=")) {
		apiKey = arg.split("=")[1]
	}
}

// Check if API key was found
if (!apiKey) {
	console.error("Error: Missing Vercel API key")
	console.error("Usage: node script.js VERCEL_API_KEY=<YOUR_API_KEY>")
	process.exit(1)
}

// Create server instance
const server = new McpServer({
	name: "vercel-mcp",
	version: "1.0.0"
})

// Import deployment functions
import {
	cancelDeployment,
	deleteDeployment,
	getDeployment,
	getDeploymentEvents,
	getDeploymentFileContents,
	getDeployments,
	listDeploymentFiles
} from "./vercel/deployments.js"

// Register deployment tools
server.tool(
	"getDeploymentEvents",
	"Gets deployment events by deployment ID and build ID",
	{
		deploymentId: z.string().describe("The ID or URL of the deployment"),
		direction: z
			.enum(["forward", "backward"])
			.optional()
			.describe("Direction of events retrieval"),
		follow: z.number().optional().describe("Follow parameter for events"),
		limit: z
			.number()
			.optional()
			.describe("Limit on number of events to return"),
		name: z.string().optional().describe("Filter events by name"),
		since: z.number().optional().describe("Timestamp to get events from"),
		until: z.number().optional().describe("Timestamp to get events until"),
		statusCode: z
			.string()
			.optional()
			.describe("Filter events by status code"),
		delimiter: z.number().optional().describe("Delimiter for events"),
		builds: z.number().optional().describe("Builds parameter"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async ({ deploymentId, ...options }) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await getDeploymentEvents(env, deploymentId, options)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error getting deployment events:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error getting deployment events: ${errorMessage}`
					}
				]
			}
		}
	}
)

server.tool(
	"getDeployment",
	"Gets a deployment by ID or URL",
	{
		deploymentId: z.string().describe("The ID or URL of the deployment"),
		withGitRepoInfo: z
			.string()
			.optional()
			.describe("Include git repository info"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async ({ deploymentId, ...options }) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await getDeployment(env, deploymentId, options)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error getting deployment:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error getting deployment: ${errorMessage}`
					}
				]
			}
		}
	}
)

server.tool(
	"cancelDeployment",
	"Cancels a deployment",
	{
		deploymentId: z.string().describe("The ID of the deployment to cancel"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async ({ deploymentId, ...options }) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await cancelDeployment(env, deploymentId, options)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error canceling deployment:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error canceling deployment: ${errorMessage}`
					}
				]
			}
		}
	}
)

server.tool(
	"listDeploymentFiles",
	"Lists deployment files",
	{
		deploymentId: z.string().describe("The ID of the deployment"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async ({ deploymentId, ...options }) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await listDeploymentFiles(env, deploymentId, options)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error listing deployment files:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error listing deployment files: ${errorMessage}`
					}
				]
			}
		}
	}
)

server.tool(
	"getDeploymentFileContents",
	"Gets deployment file contents",
	{
		deploymentId: z.string().describe("The ID of the deployment"),
		fileId: z.string().describe("The ID of the file"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async ({ deploymentId, fileId, ...options }) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await getDeploymentFileContents(
				env,
				deploymentId,
				fileId,
				options
			)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error getting deployment file contents:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error getting deployment file contents: ${errorMessage}`
					}
				]
			}
		}
	}
)

server.tool(
	"getDeployments",
	"Lists deployments",
	{
		app: z.string().optional().describe("Application name"),
		from: z
			.number()
			.optional()
			.describe("Timestamp to list deployments from"),
		limit: z
			.number()
			.optional()
			.describe("Limit on number of deployments to return"),
		projectId: z.string().optional().describe("Project ID"),
		target: z.string().optional().describe("Deployment target"),
		to: z
			.number()
			.optional()
			.describe("Timestamp to list deployments until"),
		users: z.string().optional().describe("Filter by users"),
		since: z
			.number()
			.optional()
			.describe("Timestamp to get deployments from"),
		until: z
			.number()
			.optional()
			.describe("Timestamp to get deployments until"),
		state: z.string().optional().describe("Deployment state"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async (options) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await getDeployments(env, options)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error getting deployments:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error getting deployments: ${errorMessage}`
					}
				]
			}
		}
	}
)

server.tool(
	"deleteDeployment",
	"Deletes a deployment",
	{
		deploymentId: z.string().describe("The ID of the deployment to delete"),
		url: z.string().optional().describe("The URL of the deployment"),
		teamId: z.string().optional().describe("Team ID"),
		slug: z.string().optional().describe("Slug")
	},
	async ({ deploymentId, ...options }) => {
		try {
			const env = { VERCEL_API_TOKEN: apiKey }
			const result = await deleteDeployment(env, deploymentId, options)
			return {
				content: [
					{
						type: "text",
						text: JSON.stringify(result, null, 2)
					}
				]
			}
		} catch (error: unknown) {
			console.error("Error deleting deployment:", error)
			const errorMessage =
				error instanceof Error ? error.message : String(error)
			return {
				content: [
					{
						type: "text",
						text: `Error deleting deployment: ${errorMessage}`
					}
				]
			}
		}
	}
)

async function main() {
	const transport = new StdioServerTransport()
	await server.connect(transport)
}

main().catch((error) => {
	console.error("Fatal error in main():", error)
	process.exit(1)
})
