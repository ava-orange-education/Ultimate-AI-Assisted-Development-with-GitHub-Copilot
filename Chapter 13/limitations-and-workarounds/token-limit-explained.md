# Prompt: Explain token limits in GitHub Copilot

## What are Token Limits?
Copilot relies on the OpenAI Codex which has token constraints:
- Total token limit: 8192 (prompt + response)
- Too long comments or large files may truncate context

## Best Practices
- Break down large files
- Use smaller functions
- Keep comments concise and relevant

> Attach minimal context to avoid overflow.
