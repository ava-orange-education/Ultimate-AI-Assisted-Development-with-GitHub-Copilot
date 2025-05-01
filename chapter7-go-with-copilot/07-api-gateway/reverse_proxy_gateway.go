// GitHub Copilot Prompt:
// Write an API Gateway to route requests to multiple microservices

package main

import (
	"net/http"
	"net/http/httputil"
	"net/url"
)

// reverseProxy returns a reverse proxy handler for the given target URL
func reverseProxy(target string) http.Handler {
	parsedURL, _ := url.Parse(target)
	return httputil.NewSingleHostReverseProxy(parsedURL)
}

func main() {
	// Route /users to the user-service microservice
	http.Handle("/users", reverseProxy("http://localhost:5001"))

	// Route /orders to the order-service microservice
	http.Handle("/orders", reverseProxy("http://localhost:5002"))

	// Start the API Gateway server
	http.ListenAndServe(":8080", nil)
}
