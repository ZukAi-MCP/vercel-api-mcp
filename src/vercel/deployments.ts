import { Vercel } from "@vercel/sdk"
import { MCPResponse } from "../utils.js"

/**
 * Gets deployment events by deployment ID and build ID
 * @param env {Env} The environment containing the Vercel token
 * @param deploymentId {string} The ID or URL of the deployment
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The deployment events
 */
export async function getDeploymentEvents(
	env: Env,
	deploymentId: string,
	options?: {
		direction?: "forward" | "backward"
		limit?: number
		name?: string
		since?: number
		until?: number
		statusCode?: string
		delimiter?: number
		builds?: number
		teamId?: string
		slug?: string
	}
) {
	// Construct the URL for the Vercel API endpoint
	let url = `https://api.vercel.com/v3/deployments/${deploymentId}/events`

	// Create the query parameters
	const params = new URLSearchParams()
	params.append("follow", "0") // Always set follow=0 as requested

	// Add other optional parameters
	if (options?.direction) params.append("direction", options.direction)
	if (options?.limit) params.append("limit", options.limit.toString())
	if (options?.name) params.append("name", options.name)
	if (options?.since) params.append("since", options.since.toString())
	if (options?.until) params.append("until", options.until.toString())
	if (options?.statusCode) params.append("statusCode", options.statusCode)
	if (options?.delimiter)
		params.append("delimiter", options.delimiter.toString())
	if (options?.builds) params.append("builds", options.builds.toString())
	if (options?.teamId) params.append("teamId", options.teamId)
	if (options?.slug) params.append("slug", options.slug)

	// Append the query parameters to the URL
	url = `${url}?${params.toString()}`

	// Make the fetch request
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${env.VERCEL_API_TOKEN}`,
			"Content-Type": "application/json"
		}
	})

	// Parse the response as JSON
	const data = await response.json()

	return MCPResponse(data)
}

/**
 * Gets a deployment by ID or URL
 * @param env {Env} The environment containing the Vercel token
 * @param deploymentId {string} The ID or URL of the deployment
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The deployment details
 */
export async function getDeployment(
	env: Env,
	deploymentId: string,
	options?: {
		withGitRepoInfo?: string
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.deployments.getDeployment({
		idOrUrl: deploymentId,
		...options
	})

	return MCPResponse(response)
}

/**
 * Cancels a deployment
 * @param env {Env} The environment containing the Vercel token
 * @param deploymentId {string} The ID of the deployment to cancel
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The response from canceling the deployment
 */
export async function cancelDeployment(
	env: Env,
	deploymentId: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.deployments.cancelDeployment({
		id: deploymentId,
		...options
	})

	return MCPResponse(response)
}

/**
 * Lists deployment files
 * @param env {Env} The environment containing the Vercel token
 * @param deploymentId {string} The ID of the deployment
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The deployment files
 */
export async function listDeploymentFiles(
	env: Env,
	deploymentId: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.deployments.listDeploymentFiles({
		id: deploymentId,
		...options
	})

	return MCPResponse(response)
}

/**
 * Gets deployment file contents
 * @param env {Env} The environment containing the Vercel token
 * @param deploymentId {string} The ID of the deployment
 * @param fileId {string} The ID of the file
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The file contents
 */
export async function getDeploymentFileContents(
	env: Env,
	deploymentId: string,
	fileId: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.deployments.getDeploymentFileContents({
		id: deploymentId,
		fileId: fileId,
		...options
	})

	return MCPResponse(response)
}

/**
 * Lists deployments
 * @param env {Env} The environment containing the Vercel token
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The list of deployments
 */
export async function getDeployments(
	env: Env,
	options?: {
		app?: string
		from?: number
		limit?: number
		projectId?: string
		target?: string
		to?: number
		users?: string
		since?: number
		until?: number
		state?: string
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.deployments.getDeployments({
		...options
	})

	return MCPResponse(response)
}

/**
 * Deletes a deployment
 * @param env {Env} The environment containing the Vercel token
 * @param deploymentId {string} The ID of the deployment to delete
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The response from deleting the deployment
 */
export async function deleteDeployment(
	env: Env,
	deploymentId: string,
	options?: {
		url?: string
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.deployments.deleteDeployment({
		id: deploymentId,
		...options
	})

	return MCPResponse(response)
}
