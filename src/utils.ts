export function MCPResponse(data: unknown) {
	return {
		content: [
			{
				type: "text",
				text:
					typeof data === "string"
						? data
						: JSON.stringify(data, null, 2)
			}
		]
	}
}
