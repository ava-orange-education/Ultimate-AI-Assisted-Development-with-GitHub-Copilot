# Prompt: Troubleshoot Chocolatey installation errors

## Error
```
The term 'choco' is not recognized...
```

## Fix Steps
- Open PowerShell **as Administrator**
- Install Chocolatey:
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = 'Tls12'
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

- Restart PowerShell and try `choco install` again

> Copilot CLI may suggest remediation steps based on terminal error logs.
