# Prompt: Explain Copilot limitations due to training data

## Issues
- Suggestions may reflect outdated practices
- Limited exposure to private or enterprise-specific code
- May replicate licensing-restricted code from training set
- Misses context from proprietary internal frameworks

## Example
> Copilot failed to suggest use of a proprietary `AuditLogger` class used in internal microservices

## Mitigation
- Manually inject context via comments or attach prior examples
- Customize prompts to explain your environment
