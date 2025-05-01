// GitHub Copilot Prompt:
// Write a class that uses std::shared_ptr to manage a database connection

#include <iostream>
#include <memory>

class DatabaseConnection {
public:
    void connect() {
        std::cout << "Database connected." << std::endl;
    }

    void disconnect() {
        std::cout << "Database disconnected." << std::endl;
    }
};

class ConnectionManager {
private:
    std::shared_ptr<DatabaseConnection> connection;

public:
    ConnectionManager() {
        connection = std::make_shared<DatabaseConnection>();
        connection->connect();
    }

    ~ConnectionManager() {
        connection->disconnect();
    }
};

int main() {
    {
        ConnectionManager manager;
        std::cout << "Using connection manager inside scope." << std::endl;
    } // Destructor called here

    std::cout << "Connection manager is now out of scope." << std::endl;
    return 0;
}
