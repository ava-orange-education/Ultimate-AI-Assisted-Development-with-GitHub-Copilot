// Prompt: Create Selenium Page Object for Checkout Page
public class CheckoutPage {
    WebDriver driver;
    By placeOrderBtn = By.id("place-order");

    public CheckoutPage(WebDriver driver) {
        this.driver = driver;
    }

    public void placeOrder() {
        driver.findElement(placeOrderBtn).click();
    }
}
