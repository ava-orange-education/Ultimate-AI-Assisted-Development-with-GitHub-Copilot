// Prompt Used: Write a JUnit 5 test to verify singleton behavior in a DatabaseConnectionManager class

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertSame;

public class DatabaseConnectionManagerTest {

    @Test
    void testSingletonBehavior() {
        DatabaseConnectionManager instance1 = DatabaseConnectionManager.getInstance();
        DatabaseConnectionManager instance2 = DatabaseConnectionManager.getInstance();

        assertSame(instance1, instance2, "Both instances should be the same (singleton)");
    }
}
