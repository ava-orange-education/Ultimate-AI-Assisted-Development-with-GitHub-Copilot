# Prompt: Discuss Copilot limitations from architecture perspective

## Limitations
- **Stateless Requests**: Each suggestion is made without memory of prior conversations.
- **No project-wide understanding**: Context is limited to current buffer.
- **Latency in large files**: Slower suggestions when navigating huge codebases.
- **Rate limits**: Especially on Copilot CLI during bulk usage.

## Recommendation
- Use Copilot Chat for persistent guidance
- Modularize code into readable files
