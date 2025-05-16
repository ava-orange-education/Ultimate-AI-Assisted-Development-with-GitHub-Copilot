// Prompt: Generate a parameterized TestNG test for login scenarios

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import org.testng.Assert;

public class LoginTest {

    @DataProvider(name = "loginData")
    public Object[][] loginData() {
        return new Object[][] {
            {"validUser", "validPass", true},
            {"invalidUser", "validPass", false},
            {"validUser", "invalidPass", false},
            {"", "", false}
        };
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String username, String password, boolean expectedOutcome) {
        System.out.println("Testing login with: " + username + " / " + password);
        
        // Simulate login logic
        boolean actualOutcome = simulateLogin(username, password);
        
        // Assert the outcome
        Assert.assertEquals(actualOutcome, expectedOutcome, "Login test failed for: " + username + " / " + password);
    }

    private boolean simulateLogin(String username, String password) {
        // Simulated login logic for demonstration purposes
        return "validUser".equals(username) && "validPass".equals(password);
    }
}
