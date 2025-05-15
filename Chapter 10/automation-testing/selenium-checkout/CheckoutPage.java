// Prompt: Create Selenium Page Object for Checkout Page
public class CheckoutPage {
    WebDriver driver;
    By nameField = By.id("name");
    By emailField = By.id("email");
    By phoneField = By.id("phone");
    By addressField = By.id("address");
    By cityField = By.id("city");
    By stateDropdown = By.id("state");
    By zipCodeField = By.id("zip");
    By placeOrderBtn = By.id("place-order");

    public CheckoutPage(WebDriver driver) {
        this.driver = driver;
    }

    public void enterBillingDetails(String name, String email, String phone, String address, String city, String state, String zip) {
        driver.findElement(nameField).sendKeys(name);
        driver.findElement(emailField).sendKeys(email);
        driver.findElement(phoneField).sendKeys(phone);
        driver.findElement(addressField).sendKeys(address);
        driver.findElement(cityField).sendKeys(city);
        driver.findElement(stateDropdown).sendKeys(state);
        driver.findElement(zipCodeField).sendKeys(zip);
    }

    public void placeOrder() {
        driver.findElement(placeOrderBtn).click();
    }
}
