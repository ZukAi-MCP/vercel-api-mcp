import { MCPResponse } from "@/utils.js"
import { Vercel } from "@vercel/sdk"

/**
 * Get a Domain's configuration
 * @param env {Env} The environment containing the Vercel token
 * @param domain {string} The domain to get configuration for
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The domain configuration
 */
export async function getDomainConfig(
	env: Env,
	domain: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.domains.getDomainConfig({
		domain,
		...options
	})

	return MCPResponse(response)
}

/**
 * Get information for a single domain
 * @param env {Env} The environment containing the Vercel token
 * @param domain {string} The domain to get information for
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The domain information
 */
export async function getDomain(
	env: Env,
	domain: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.domains.getDomain({
		domain,
		...options
	})

	return MCPResponse(response)
}

/**
 * List all domains
 * @param env {Env} The environment containing the Vercel token
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} List of domains
 */
export async function getDomains(
	env: Env,
	options?: {
		limit?: number
		since?: number
		until?: number
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.domains.getDomains({
		...options
	})

	return MCPResponse(response)
}
