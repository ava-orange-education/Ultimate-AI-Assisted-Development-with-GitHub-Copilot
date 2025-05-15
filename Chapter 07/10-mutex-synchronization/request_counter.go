// GitHub Copilot Prompt:
// Implement a request counter with mutex synchronization

package main

import (
	"fmt"
	"net/http"
	"sync"
)

// Counter struct to hold the request count and a mutex for synchronization
type Counter struct {
	mu    sync.Mutex
	count int
}

// Increment safely increments the counter
func (c *Counter) Increment() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.count++
}

// GetCount safely returns the current count
func (c *Counter) GetCount() int {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.count
}

// Handler function to increment the counter and respond with the current count
func (c *Counter) Handler(w http.ResponseWriter, r *http.Request) {
	c.Increment()
	fmt.Fprintf(w, "Request count: %d\n", c.GetCount())
}

func main() {
	counter := &Counter{}
	http.HandleFunc("/", counter.Handler)

	fmt.Println("Starting server on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("Could not start server: %s\n", err)
	}
}
