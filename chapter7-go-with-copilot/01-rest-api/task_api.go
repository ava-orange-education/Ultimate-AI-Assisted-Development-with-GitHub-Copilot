// GitHub Copilot Prompt:
// Write a basic REST API with Go's net/http package

package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"sync"
)

// Task represents a simple task with an ID and a Name
type Task struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

// In-memory task store
var (
	tasks   = make(map[int]Task)
	nextID  = 1
	taskMux sync.Mutex
)

// CreateTaskHandler handles the creation of a new task
func CreateTaskHandler(w http.ResponseWriter, r *http.Request) {
	var task Task
	if err := json.NewDecoder(r.Body).Decode(&task); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	taskMux.Lock()
	task.ID = nextID
	nextID++
	tasks[task.ID] = task
	taskMux.Unlock()

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(task)
}

// GetTaskHandler handles fetching a task by ID
func GetTaskHandler(w http.ResponseWriter, r *http.Request) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil || id <= 0 {
		http.Error(w, "Invalid task ID", http.StatusBadRequest)
		return
	}

	taskMux.Lock()
	task, exists := tasks[id]
	taskMux.Unlock()

	if !exists {
		http.Error(w, "Task not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(task)
}

// UpdateTaskHandler handles updating an existing task
func UpdateTaskHandler(w http.ResponseWriter, r *http.Request) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil || id <= 0 {
		http.Error(w, "Invalid task ID", http.StatusBadRequest)
		return
	}

	var updatedTask Task
	if err := json.NewDecoder(r.Body).Decode(&updatedTask); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	taskMux.Lock()
	task, exists := tasks[id]
	if exists {
		updatedTask.ID = task.ID
		tasks[id] = updatedTask
	}
	taskMux.Unlock()

	if !exists {
		http.Error(w, "Task not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(updatedTask)
}

// DeleteTaskHandler handles deleting a task by ID
func DeleteTaskHandler(w http.ResponseWriter, r *http.Request) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil || id <= 0 {
		http.Error(w, "Invalid task ID", http.StatusBadRequest)
		return
	}

	taskMux.Lock()
	_, exists := tasks[id]
	if exists {
		delete(tasks, id)
	}
	taskMux.Unlock()

	if !exists {
		http.Error(w, "Task not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}

func main() {
	http.HandleFunc("/tasks", CreateTaskHandler)
	http.HandleFunc("/tasks/get", GetTaskHandler)
	http.HandleFunc("/tasks/update", UpdateTaskHandler)
	http.HandleFunc("/tasks/delete", DeleteTaskHandler)

	log.Println("Starting server on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Could not start server: %s\n", err)
	}
}
