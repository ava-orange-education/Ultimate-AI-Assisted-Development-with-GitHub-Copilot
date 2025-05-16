// GitHub Copilot Prompt:
// Implement a worker pool to process tasks in parallel

package main

import (
	"fmt"
	"sync"
	"time"
)

// Task represents a simple task with an ID and a name
type Task struct {
	ID   int
	Name string
}

// Worker function that processes tasks from the task channel
func worker(id int, tasks <-chan Task, wg *sync.WaitGroup) {
	defer wg.Done()

	for task := range tasks {
		fmt.Printf("Worker %d processing task %d: %s\n", id, task.ID, task.Name)
		time.Sleep(time.Second) // Simulate task processing
	}
}

// createWorkerPool spawns numWorkers and processes tasks
func createWorkerPool(numWorkers int, tasks <-chan Task) {
	var wg sync.WaitGroup

	for i := 1; i <= numWorkers; i++ {
		wg.Add(1)
		go worker(i, tasks, &wg)
	}

	wg.Wait()
}

func main() {
	const numWorkers = 3
	const numTasks = 10

	tasks := make(chan Task, numTasks)

	// Start the worker pool
	go createWorkerPool(numWorkers, tasks)

	// Send tasks
	for i := 1; i <= numTasks; i++ {
		tasks <- Task{ID: i, Name: fmt.Sprintf("Task %d", i)}
	}

	// No more tasks to send
	close(tasks)

	// Wait for all workers to finish
	time.Sleep(time.Second * numTasks / numWorkers)
	fmt.Println("All tasks processed")
}
