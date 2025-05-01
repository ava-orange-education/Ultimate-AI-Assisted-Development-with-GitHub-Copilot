// Prompt: Create Selenium Page Object for Cart Page
public class CartPage {
    WebDriver driver;
    By checkoutBtn = By.id("checkout");

    public CartPage(WebDriver driver) {
        this.driver = driver;
    }

    public void proceedToCheckout() {
        driver.findElement(checkoutBtn).click();
    }
}
