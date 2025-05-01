// GitHub Copilot Prompt:
// Add structured logging and error handling to a Go application using logrus

package main

import (
	"errors"
	"fmt"
	"time"

	"github.com/sirupsen/logrus"
)

// Task represents a simple task with an ID
type Task struct {
	ID int
}

// Worker function that processes tasks from the task channel
func worker(id int, tasks <-chan Task, results chan<- error, logger *logrus.Logger) {
	for task := range tasks {
		logger.WithFields(logrus.Fields{
			"worker_id": id,
			"task_id":   task.ID,
		}).Info("Processing task")

		// Simulate task processing time
		time.Sleep(time.Second)

		// Simulate an error for demonstration purposes
		if task.ID%2 == 0 {
			err := errors.New("simulated error")
			logger.WithFields(logrus.Fields{
				"worker_id": id,
				"task_id":   task.ID,
				"error":     err,
			}).Error("Failed to process task")
			results <- err
		} else {
			logger.WithFields(logrus.Fields{
				"worker_id": id,
				"task_id":   task.ID,
			}).Info("Task processed successfully")
			results <- nil
		}
	}
}

func main() {
	const numWorkers = 3
	const numTasks = 10

	// Initialize logger
	logger := logrus.New()
	logger.SetFormatter(&logrus.JSONFormatter{})
	logger.SetLevel(logrus.InfoLevel)

	// Create channels for tasks and results
	tasks := make(chan Task, numTasks)
	results := make(chan error, numTasks)

	// Start worker goroutines
	for i := 1; i <= numWorkers; i++ {
		go worker(i, tasks, results, logger)
	}

	// Send tasks to the task channel
	for i := 1; i <= numTasks; i++ {
		tasks <- Task{ID: i}
	}
	close(tasks)

	// Collect results
	for i := 1; i <= numTasks; i++ {
		err := <-results
		if err != nil {
			logger.WithFields(logrus.Fields{
				"task_id": i,
				"error":   err,
			}).Error("Task failed")
		} else {
			logger.WithFields(logrus.Fields{
				"task_id": i,
			}).Info("Task completed successfully")
		}
	}

	fmt.Println("All tasks processed")
}
