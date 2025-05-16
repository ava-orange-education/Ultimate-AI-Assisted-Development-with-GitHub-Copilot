// Prompt: Appium test for Android login screen
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.junit.Test;
import org.junit.Assert;
import org.junit.Before;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginTest {
    AndroidDriver<MobileElement> driver;

    @Before
    public void setUp() {
        // Initialize the driver with desired capabilities
        driver = new AndroidDriver<>(/* URL and capabilities */);
    }

    @Test
    public void loginTest() {
        // Launch the app
        driver.launchApp();

        // Enter username and password
        driver.findElement(By.id("username")).sendKeys("user");
        driver.findElement(By.id("password")).sendKeys("pass123");

        // Click the login button
        driver.findElement(By.id("loginBtn")).click();

        // Validate successful login
        WebDriverWait wait = new WebDriverWait(driver, 10);
        boolean isLoggedIn = wait.until(ExpectedConditions.urlContains("dashboard"));
        Assert.assertTrue("User is not logged in", isLoggedIn);
    }

    @Test
    public void bankingAppLoginTest() {
        // Launch the app
        driver.launchApp();

        // Enter username and password
        driver.findElement(By.id("banking_username")).sendKeys("bankUser");
        driver.findElement(By.id("banking_password")).sendKeys("securePass123");

        // Click the login button
        driver.findElement(By.id("banking_loginBtn")).click();

        // Validate successful login by checking for a specific element on the dashboard
        WebDriverWait wait = new WebDriverWait(driver, 10);
        boolean isDashboardVisible = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("dashboard_home"))) != null;
        Assert.assertTrue("User is not logged in to the banking app", isDashboardVisible);
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
