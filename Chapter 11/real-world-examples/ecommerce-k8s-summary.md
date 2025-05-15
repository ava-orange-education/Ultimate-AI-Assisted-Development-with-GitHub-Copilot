# Prompt: Summarize Copilot-enabled K8s pipeline in an e-commerce case

## E-Commerce K8s Workflow

- **Docker + K8s**: Frontend + Backend services containerized and orchestrated using GKE
- **GitHub Actions**: Auto-trigger Docker builds, run security checks, apply K8s manifests
- **Blue-Green Deployment**: Enabled using label selectors and Ingress routes
- **Real-Time Logging**: Linked Promtail to Loki for dashboard observability
- **Rollback Strategy**: GitHub Action rollback jobs configured via tags

> Copilot helped define reusable Kubernetes YAMLs and validation hooks in PR checks.
