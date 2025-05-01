// GitHub Copilot Prompt:
// Implement a URL shortener service in Go with in-memory storage

package main

import (
	"encoding/json"
	"math/rand"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/mux"
)

// URLMapping represents a mapping between a short URL and the original URL
type URLMapping struct {
	ShortURL    string `json:"short_url"`
	OriginalURL string `json:"original_url"`
}

// In-memory store for URL mappings
var (
	urlStore = make(map[string]string)
	storeMux sync.Mutex
)

// generateShortURL creates a random 6-character short code
func generateShortURL(n int) string {
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}

// CreateShortURLHandler handles the creation of a new short URL
func CreateShortURLHandler(w http.ResponseWriter, r *http.Request) {
	var mapping URLMapping
	if err := json.NewDecoder(r.Body).Decode(&mapping); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	storeMux.Lock()
	defer storeMux.Unlock()

	for {
		mapping.ShortURL = generateShortURL(6)
		if _, exists := urlStore[mapping.ShortURL]; !exists {
			break
		}
	}

	urlStore[mapping.ShortURL] = mapping.OriginalURL

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(mapping)
}

// GetOriginalURLHandler handles redirection from short to original URL
func GetOriginalURLHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	shortURL := vars["shortURL"]

	storeMux.Lock()
	originalURL, exists := urlStore[shortURL]
	storeMux.Unlock()

	if !exists {
		http.Error(w, "Short URL not found", http.StatusNotFound)
		return
	}

	http.Redirect(w, r, originalURL, http.StatusFound)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/shorten", CreateShortURLHandler).Methods("POST")
	r.HandleFunc("/{shortURL}", GetOriginalURLHandler).Methods("GET")

	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)
}
