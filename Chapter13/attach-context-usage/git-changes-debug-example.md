# Prompt: Example of Copilot debugging based on staged Git changes

## Scenario:
- A PR fails on `order-summary.js` after an API change.

## Resolution:
- User pasted Git diff
- Copilot inferred missing `order.status` field mapping
- Suggested backward-compatible fix inline
