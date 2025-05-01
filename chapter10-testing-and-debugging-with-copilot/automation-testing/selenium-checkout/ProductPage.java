// Prompt: Create Selenium Page Object for Product Page
public class ProductPage {
    WebDriver driver;
    By addToCartBtn = By.id("add-to-cart");

    public ProductPage(WebDriver driver) {
        this.driver = driver;
    }

    public void addToCart() {
        driver.findElement(addToCartBtn).click();
    }
}
