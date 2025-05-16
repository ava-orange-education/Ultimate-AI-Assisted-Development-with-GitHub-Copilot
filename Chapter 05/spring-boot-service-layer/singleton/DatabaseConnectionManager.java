// Prompt Used: Create a thread-safe singleton class in Java for managing a database connection

public class DatabaseConnectionManager {

    private static DatabaseConnectionManager instance;

    private DatabaseConnectionManager() {
        // Private constructor to prevent instantiation
    }

    public static synchronized DatabaseConnectionManager getInstance() {
        if (instance == null) {
            instance = new DatabaseConnectionManager();
        }
        return instance;
    }

    public void connect() {
        System.out.println("Connected to database!");
    }
}
