// GitHub Copilot Prompt:
// Create a Java class that processes multiple files concurrently using threads.
// Include logic to search for keywords in each file and log results in a thread-safe manner.
// Print file names and simulate reading delay. Use ExecutorService for pooling.

import java.io.File;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ConcurrentFileProcessor {

    public static void main(String[] args) {
        File[] files = {
            new File("file1.txt"),
            new File("file2.txt"),
            new File("file3.txt"),
            new File("file4.txt"),
            new File("file5.txt")
        };

        ExecutorService executor = Executors.newFixedThreadPool(3); // 3 concurrent threads

        for (File file : files) {
            executor.submit(() -> processFile(file));
        }

        executor.shutdown();
    }

    private static void processFile(File file) {
        try {
            System.out.println("Processing " + file.getName() + " in thread: " + Thread.currentThread().getName());
            Thread.sleep(1000); // Simulate delay
            System.out.println("Completed " + file.getName());
        } catch (InterruptedException e) {
            System.err.println("Error processing " + file.getName());
            Thread.currentThread().interrupt();
        }
    }
}
