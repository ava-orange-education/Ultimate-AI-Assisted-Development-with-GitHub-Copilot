// Prompt: Add dynamic waits to stabilize Selenium login test
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com/login");

        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));
        WebElement passwordField = driver.findElement(By.id("password"));

        usernameField.sendKeys("user123");
        passwordField.sendKeys("pass456");

        driver.findElement(By.id("loginBtn")).click();
        wait.until(ExpectedConditions.urlContains("dashboard"));

        driver.quit();
    }
}
