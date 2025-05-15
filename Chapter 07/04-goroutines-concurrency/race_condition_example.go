// GitHub Copilot Prompt:
// Demonstrate a race condition in Go using goroutines

package main

import (
	"fmt"
	"time"
)

var logs []string

func logMessage(msg string) {
	logs = append(logs, msg)
}

func main() {
	for i := 0; i < 100; i++ {
		go logMessage(fmt.Sprintf("Log entry #%d", i))
	}

	time.Sleep(time.Second)
	fmt.Println("Total logs:", len(logs))
}
