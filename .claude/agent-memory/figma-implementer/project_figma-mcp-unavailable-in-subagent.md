---
name: figma-mcp-unavailable-in-subagent
description: Figma MCP tools are not callable from the figma-implementer subagent context, blocking get_design_context
metadata:
  type: project
---

The Figma MCP server (`claude.ai Figma` / `plugin:figma:figma`) shows as connected at the session level (and its usage instructions are even injected into this subagent's system context), but its tools are NOT available inside the figma-implementer subagent. Calls to `get_design_context`, `get_screenshot`, and prefixed variants (`mcp__claude.ai_Figma__*`, `mcp__figma__*`) all fail with "No such tool available". Re-confirmed 2026-06-18 for node 764-2345: `get_design_context` still errors even though the Figma server's instructions appear in the system prompt.

**Why:** Tool exposure to subagents appears scoped — the MCP tools were not included in this agent's allowed tool set. CLAUDE.md requires Figma reads to go through `get_design_context`, which I cannot satisfy here.

**How to apply:** Before promising a Figma-to-code implementation, verify a Figma tool is actually callable (one cheap probe). If not, do NOT fabricate the design or guess variant structure — report the blocker to the parent agent and ask it to either run the Figma MCP call itself and pass the design context/screenshot in, or to enable the Figma MCP tools for this subagent. Implementation conventions for this repo (token usage, 4-file component set, CSF3 stories) are already understood from existing components like [[repo-component-conventions]].
