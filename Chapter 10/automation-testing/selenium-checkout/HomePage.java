// Prompt: Create Selenium Page Object for Home Page
public class HomePage {
    WebDriver driver;
    By searchBox = By.name("q");

    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public void navigateToHomePage(String url) {
        driver.get(url);
    }

    public void searchProduct(String productName) {
        driver.findElement(searchBox).sendKeys(productName);
        driver.findElement(searchBox).submit();
    }
}
