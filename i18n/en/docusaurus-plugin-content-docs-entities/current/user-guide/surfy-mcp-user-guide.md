# Surfy MCP Server - Quick Start Guide

Connect your Surfy workspace to Cursor IDE with our Model Context Protocol (MCP) server to access people data, company information, and more directly in your AI chat.

## 🚀 Add to Cursor

<div >
  <a href="cursor://anysphere.cursor-deeplink/mcp/install?name=surfy&config=eyJ1cmwiOiJodHRwczovL2FwcC5zdXJmeS5wcm8vYXBpL3YxL3N1cmZ5LW1jcC9tY3AifQ%3D%3D" >
    + Add Surfy MCP to Cursor
  </a>
</div>

## What You'll Get

Once connected, you can ask Cursor to:

- **"Show me all companies in Surfy"** - Lists available companies and their configurations
- **"Get people from [company-name]"** - Retrieves employee data for specific companies  
- **"What resources are available?"** - Shows all accessible data sources
- **"Initialize the MCP connection"** - Tests the connection to Surfy

## Prerequisites

Before adding the MCP server, make sure:

1. **You have access to Surfy** - The MCP server connects to the production Surfy instance
2. **Valid authentication** - You'll need proper credentials to access company and people data

## Manual Setup (Alternative)

If the "Add to Cursor" button doesn't work, you can manually configure the MCP server:

1. Open Cursor settings
2. Add this configuration to your MCP servers:

```json
{
  "mcpServers": {
    "surfy": {
      "transport": {
        "type": "streamable_http",
        "url": "https://app.surfy.pro/api/v1/mcp"
      }
    }
  }
}
```

## Available Tools

### `list_companies`
Lists all available companies in Surfy with their configurations.

### `list_people` 
Retrieves people data from a specific company/tenant.

## Usage Examples

Once connected, try these commands in Cursor chat:

```
@surfy What companies are available in Surfy?
@surfy Show me the people in acme-corp
@surfy List all available resources
```

## Troubleshooting

**Connection issues?**
- Ensure you have internet access to reach `https://app.surfy.pro`
- Check that you have valid Surfy credentials
- Restart Cursor IDE after adding the configuration

**Authentication errors?**
- Make sure you have proper access to the Surfy instance
- Verify your credentials are valid for the company data you're trying to access

## Need Help?

For detailed setup instructions and advanced configuration, see:
- [MCP Cursor Setup Guide](./mcp-cursor-setup.md)
- [MCP Integration Documentation](./mcp-cursor-integration.md)

---

*This MCP server provides secure access to Surfy's people and company data through Cursor's AI chat interface.*
