// Prompt: Create Selenium Page Object for Cart Page
public class CartPage {
    WebDriver driver;
    By checkoutBtn = By.id("checkout");
    By cartItems = By.className("cart-item");

    public CartPage(WebDriver driver) {
        this.driver = driver;
    }

    public void proceedToCheckout() {
        driver.findElement(checkoutBtn).click();
    }

    public boolean isCartNotEmpty() {
        return driver.findElements(cartItems).size() > 0;
    }
}
