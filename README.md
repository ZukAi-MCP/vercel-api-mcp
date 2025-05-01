# vercel-mcp

An MCP server that connects to Vercel API.

## Usage

### Cursor

- To install in a project, add the MCP server to your `.cursor/mcp.json`:

```json
{
	"mcpServers": {
		"vercel": {
			"command": "npx",
			"args": ["vercel-mcp VERCEL_API_KEY=<YOUR_API_KEY>"],

		}
	}
}
```

- To install globally, add this command to your Cursor settings:

```bash
npx vercel-mcp VERCEL_API_KEY=<your-vercel-api-key>
```

### Windsurf

- Add the MCP server to your `~/.codeium/windsurf/mcp_config.json` file:

```json
{
	"mcpServers": {
		"vercel": {
			"command": "npx",
			"args": ["vercel-mcp VERCEL_API_KEY=<YOUR_API_KEY>"]
		}
	}
}
```

## Tools

This MCP server provides the following tools for interacting with the Vercel API:

### Deployments

- `getVercelDeploymentEvents` - Get deployment events by deployment ID and build ID
- `getVercelDeployment` - Get a deployment by ID or URL
- `cancelVercelDeployment` - Cancel a deployment
- `listVercelDeploymentFiles` - List deployment files
- `getVercelDeploymentFileContents` - Get deployment file contents
- `getVercelDeployments` - List deployments
- `deleteVercelDeployment` - Delete a deployment

### DNS

- `getVercelDNSRecords` - List DNS records for a domain
- `createVercelDNSRecord` - Create a DNS record for a domain
- `updateVercelDNSRecord` - Update a DNS record
- `deleteVercelDNSRecord` - Delete a DNS record

### Domains

- `getVercelDomainConfig` - Get a Domain's configuration
- `getVercelDomain` - Get information for a single domain
- `getVercelDomains` - List all domains for the authenticated user or team

### Projects

- `getVercelProjects` - Retrieve a list of projects
- `updateVercelProject` - Update an existing project
- `getVercelProjectDomains` - Retrieve project domains by project id or name
- `getVercelProjectDomain` - Get a project domain
- `updateVercelProjectDomain` - Update a project domain
- `removeVercelProjectDomain` - Remove a domain from a project
- `addVercelProjectDomain` - Add a domain to a project
- `verifyVercelProjectDomain` - Verify project domain

### Environment Variables

- `filterVercelProjectEnvs` - Retrieve the environment variables of a project
- `getVercelProjectEnv` - Retrieve the decrypted value of an environment variable
- `createVercelProjectEnv` - Create one or more environment variables
- `removeVercelProjectEnv` - Remove an environment variable
- `editVercelProjectEnv` - Edit an environment variable
