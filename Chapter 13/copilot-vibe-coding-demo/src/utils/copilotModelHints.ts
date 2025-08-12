/**
 * Utility to provide hints to developers based on model type.
 */

export function getModelPromptHint(model: string): string {
  switch (model.toLowerCase()) {
    case 'gpt-4o':
      return 'Include visuals or UI intent to utilize multi-modal power.';
    case 'claude':
      return 'Ask for summaries or rationale; great for long context.';
    case 'gemini':
      return 'Use structured prompts with diagrams or linked flows.';
    default:
      return 'Keep prompt clear, concise, and code-centric.';
  }
}
