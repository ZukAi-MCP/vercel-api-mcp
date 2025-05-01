import { MCPResponse } from "@/utils.js"
import { Vercel } from "@vercel/sdk"

/**
 * List existing DNS records for a domain
 * @param env {Env} The environment containing the Vercel token
 * @param domain {string} The domain to list DNS records for
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The DNS records
 */
export async function getRecords(
	env: Env,
	domain: string,
	options?: {
		limit?: string
		since?: string
		until?: string
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.dns.getRecords({
		domain,
		...options
	})

	return MCPResponse(response)
}

/**
 * Create a DNS record for a domain
 * @param env {Env} The environment containing the Vercel token
 * @param domain {string} The domain to create the DNS record for
 * @param recordData {object} The DNS record data
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The created DNS record
 */
export async function createRecord(
	env: Env,
	domain: string,
	recordData: unknown,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.dns.createRecord({
		domain,
		teamId: options?.teamId,
		slug: options?.slug,
		// @ts-ignore - Type is complex in SDK, but runtime works fine
		requestBody: recordData
	})

	return MCPResponse(response)
}

/**
 * Update an existing DNS record
 * @param env {Env} The environment containing the Vercel token
 * @param recordId {string} The ID of the DNS record to update
 * @param recordData {object} The updated DNS record data
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The updated DNS record
 */
export async function updateRecord(
	env: Env,
	recordId: string,
	recordData: unknown,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.dns.updateRecord({
		recordId,
		teamId: options?.teamId,
		slug: options?.slug,
		// @ts-ignore - Type is complex in SDK, but runtime works fine
		requestBody: recordData
	})

	return MCPResponse(response)
}

/**
 * Delete a DNS record
 * @param env {Env} The environment containing the Vercel token
 * @param domain {string} The domain the DNS record belongs to
 * @param recordId {string} The ID of the DNS record to delete
 * @param options {object} Optional parameters for the request
 * @return {Promise<any>} The response from deleting the DNS record
 */
export async function removeRecord(
	env: Env,
	domain: string,
	recordId: string,
	options?: {
		teamId?: string
		slug?: string
	}
) {
	const vercel = new Vercel({
		bearerToken: env.VERCEL_API_TOKEN
	})

	const response = await vercel.dns.removeRecord({
		domain,
		recordId,
		...options
	})

	return MCPResponse(response)
}
