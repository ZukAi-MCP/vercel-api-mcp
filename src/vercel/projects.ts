import { MCPResponse } from "@/utils.js"
import { Vercel } from "@vercel/sdk"

/**
 * Retrieve a list of projects
 * @param env {Env} The environment containing the Vercel token
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} List of projects
 */
export async function getProjects(
	env: Env,
	options?: {
		gitForkProtection?: "0" | "1"
		repoUrl?: string
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.getProjects({
		...options
	})

	return MCPResponse(response)
}

/**
 * Update an existing project
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param projectData {object} The project data to update
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The updated project
 */
export async function updateProject(
	env: Env,
	idOrName: string,
	projectData: unknown,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.updateProject({
		idOrName,
		teamId: options?.teamId,
		slug: options?.slug,
		// @ts-ignore
		requestBody: projectData
	})

	return MCPResponse(response)
}

/**
 * Retrieve project domains by project id or name
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} List of project domains
 */
export async function getProjectDomains(
	env: Env,
	idOrName: string,
	options?: {
		production?: "true" | "false"
		customEnvironmentId?: string
		redirects?: "true" | "false"
		redirect?: string
		limit?: number
		since?: number
		until?: number
		order?: "ASC" | "DESC"
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.getProjectDomains({
		idOrName,
		...options
	})

	return MCPResponse(response)
}

/**
 * Get a project domain
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param domain {string} The domain name
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The project domain
 */
export async function getProjectDomain(
	env: Env,
	idOrName: string,
	domain: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.getProjectDomain({
		idOrName,
		domain,
		...options
	})

	return MCPResponse(response)
}

/**
 * Update a project domain
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param domain {string} The domain name
 * @param domainData {object} The domain data to update
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The updated project domain
 */
export async function updateProjectDomain(
	env: Env,
	idOrName: string,
	domain: string,
	domainData: unknown,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.updateProjectDomain({
		idOrName,
		domain,
		teamId: options?.teamId,
		slug: options?.slug,
		// @ts-ignore
		requestBody: domainData
	})

	return MCPResponse(response)
}

/**
 * Remove a domain from a project
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param domain {string} The domain name
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The response from removing the domain
 */
export async function removeProjectDomain(
	env: Env,
	idOrName: string,
	domain: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.removeProjectDomain({
		idOrName,
		domain,
		...options
	})

	return MCPResponse(response)
}

/**
 * Add a domain to a project
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param domainData {object} The domain data to add with required name property
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The added project domain
 */
export async function addProjectDomain(
	env: Env,
	idOrName: string,
	domainData: { name: string; [key: string]: unknown },
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	// Make sure domainData has name property
	if (
		typeof domainData === "object" &&
		domainData !== null &&
		!("name" in domainData)
	) {
		throw new Error("domainData must have a 'name' property")
	}

	const response = await vercel.projects.addProjectDomain({
		idOrName,
		teamId: options?.teamId,
		slug: options?.slug,
		// @ts-ignore
		requestBody: domainData
	})

	return MCPResponse(response)
}

/**
 * Verify project domain
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param domain {string} The domain name
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The verification result
 */
export async function verifyProjectDomain(
	env: Env,
	idOrName: string,
	domain: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.verifyProjectDomain({
		idOrName,
		domain,
		...options
	})

	return MCPResponse(response)
}

/**
 * Retrieve the environment variables of a project by id or name
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The project environment variables
 */
export async function filterProjectEnvs(
	env: Env,
	idOrName: string,
	options?: {
		target?: string[]
		decrypt?: "true" | "false"
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.filterProjectEnvs({
		idOrName,
		...options
	})

	return MCPResponse(response)
}

/**
 * Retrieve the decrypted value of an environment variable of a project by id
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param envId {string} The ID of the environment variable
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The environment variable
 */
export async function getProjectEnv(
	env: Env,
	idOrName: string,
	envId: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	// The Vercel SDK expects the id for the route parameter
	const response = await vercel.projects.getProjectEnv({
		idOrName,
		id: envId,
		...options
	} as { idOrName: string; id: string; teamId?: string; slug?: string })

	return MCPResponse(response)
}

/**
 * Create one or more environment variables
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param envData {object} The environment variable data or array of environment variables
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The created environment variables
 */
export async function createProjectEnv(
	env: Env,
	idOrName: string,
	envData: unknown,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.projects.createProjectEnv({
		idOrName,
		teamId: options?.teamId,
		slug: options?.slug,
		//biome-ignore lint/suspicious/noExplicitAny: Complex type definitions in SDK
		requestBody: envData as any
	})

	return MCPResponse(response)
}

/**
 * Remove an environment variable
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param envId {string} The ID of the environment variable
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The response from removing the environment variable
 */
export async function removeProjectEnv(
	env: Env,
	idOrName: string,
	envId: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	// The Vercel SDK expects the id for the route parameter
	const response = await vercel.projects.removeProjectEnv({
		idOrName,
		id: envId,
		...options
	} as { idOrName: string; id: string; teamId?: string; slug?: string })

	return MCPResponse(response)
}

/**
 * Edit an environment variable
 * @param env {Env} The environment containing the Vercel token
 * @param idOrName {string} The ID or name of the project
 * @param envId {string} The ID of the environment variable
 * @param envData {object} The environment variable data to update
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The updated environment variable
 */
export async function editProjectEnv(
	env: Env,
	idOrName: string,
	envId: string,
	envData: unknown,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	// The Vercel SDK expects the id for the route parameter
	const response = await vercel.projects.editProjectEnv({
		idOrName,
		id: envId,
		teamId: options?.teamId,
		slug: options?.slug,
		requestBody: envData as Record<string, unknown>
	} as {
		idOrName: string
		id: string
		requestBody: Record<string, unknown>
		teamId?: string
		slug?: string
	})

	return MCPResponse(response)
}
