# Prompt:
# Generate a Dockerfile and Kubernetes deployment YAML for a Node.js microservice.
# - The app listens on port 8080.
# - Use Nginx as a reverse proxy.
# - Deploy as a Kubernetes pod.

# Dockerfile
# Stage 1: Build the Node.js application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
# RUN npm run build

# Stage 2: Set up Nginx and the Node.js application
FROM nginx:alpine

# Copy the built Node.js application from the build stage
COPY --from=build /app /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
