// GitHub Copilot Prompt:
// Implement a concurrent web scraper using goroutines and channels

package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"
)

func fetch(url string, wg *sync.WaitGroup, ch chan string) {
	defer wg.Done()

	resp, err := http.Get(url)
	if err != nil {
		ch <- fmt.Sprintf("Error fetching %s: %v", url, err)
		return
	}
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)
	ch <- fmt.Sprintf("Fetched %d bytes from %s", len(body), url)
}

func main() {
	urls := []string{
		"https://example.com",
		"https://golang.org",
		"https://github.com",
	}

	var wg sync.WaitGroup
	ch := make(chan string, len(urls))

	for _, url := range urls {
		wg.Add(1)
		go fetch(url, &wg, ch)
	}

	wg.Wait()
	close(ch)

	for msg := range ch {
		fmt.Println(msg)
	}
}
