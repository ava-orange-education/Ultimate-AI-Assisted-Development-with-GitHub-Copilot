// Prompt: Create Selenium Page Object for Product Page
public class ProductPage {
    WebDriver driver;
    By addToCartBtn = By.id("add-to-cart");
    By variantDropdown = By.id("variant-select");

    public ProductPage(WebDriver driver) {
        this.driver = driver;
    }

    public void selectVariant(String variant) {
        driver.findElement(variantDropdown).sendKeys(variant);
    }

    public void addToCart() {
        driver.findElement(addToCartBtn).click();
    }
}
