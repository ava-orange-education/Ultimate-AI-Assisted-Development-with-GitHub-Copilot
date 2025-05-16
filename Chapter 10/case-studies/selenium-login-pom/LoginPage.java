//Prompt Used:
//Generate a Selenium Page Object Model (POM) structure for automating the login func-tionality.  
//Ensure modularity, easy test maintenance, and support for dynamic elements.


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private WebDriver driver;
    private WebDriverWait wait;

    // Locators
    private By username = By.id("username");
    private By password = By.id("password");
    private By loginBtn = By.id("loginBtn");
    private By errorMessage = By.id("error");

    // Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, 10); // Explicit wait for dynamic elements
        PageFactory.initElements(driver, this);
    }

    // Methods for interacting with elements
    public void enterUsername(String user) {
        WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(username));
        usernameField.clear();
        usernameField.sendKeys(user);
    }

    public void enterPassword(String pass) {
        WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(password));
        passwordField.clear();
        passwordField.sendKeys(pass);
    }

    public void clickLoginButton() {
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(loginBtn));
        loginButton.click();
    }

    public String getErrorMessage() {
        WebElement errorElement = wait.until(ExpectedConditions.visibilityOfElementLocated(errorMessage));
        return errorElement.getText();
    }

    // High-level method for login
    public void login(String user, String pass) {
        enterUsername(user);
        enterPassword(pass);
        clickLoginButton();
    }
}
