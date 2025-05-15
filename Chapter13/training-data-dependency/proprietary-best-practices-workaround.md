# Prompt: Copilot workaround for proprietary code and patterns

## Problem
- Enterprise teams often use internal libraries (e.g., `core.auth.TokenVerifier`)
- Copilot lacks access to these libraries

## Solution
- Manually describe the utility in comments
```js
// TokenVerifier: Verifies JWT using company-issued keys
```

- Paste interface stub at top of the file to guide Copilot:
```ts
interface TokenVerifier {
  verifyToken(token: string): boolean;
}
```

- Use `Attach Context` in Copilot Chat for repeated usage
