# Prompt: Resolve terminal error with K6 CLI

## Issue
```
'k6' is not recognized as an internal or external command
```

## Fix
- Ensure K6 binary is added to system path.
- Use the command below to add manually:
```sh
setx PATH "%PATH%;C:\k6"
```
- Reopen terminal and run:
```sh
k6 version
```

> Copilot can assist by interpreting common CLI errors and suggesting environment setup.
