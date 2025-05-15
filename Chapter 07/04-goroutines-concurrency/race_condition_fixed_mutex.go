// GitHub Copilot Prompt:
// Fix race condition in goroutines using sync.Mutex

package main

import (
	"fmt"
	"sync"
	"time"
)

var mu sync.Mutex
var logs []string

func logMessage(msg string) {
	mu.Lock()
	logs = append(logs, msg)
	mu.Unlock()
}

func main() {
	for i := 0; i < 100; i++ {
		go logMessage(fmt.Sprintf("Log entry #%d", i))
	}

	time.Sleep(time.Second)
	fmt.Println("Total logs (thread-safe):", len(logs))
}
