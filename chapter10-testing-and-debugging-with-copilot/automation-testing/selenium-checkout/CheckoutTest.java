// Prompt: Write Selenium Test for checkout flow using POM
public class CheckoutTest {
    WebDriver driver;

    @Before
    public void setUp() {
        driver = new ChromeDriver();
        driver.get("https://example.com");
    }

    @Test
    public void testCheckoutFlow() {
        new HomePage(driver).searchProduct("laptop");
        new ProductPage(driver).addToCart();
        new CartPage(driver).proceedToCheckout();
        new CheckoutPage(driver).placeOrder();
    }

    @After
    public void tearDown() {
        driver.quit();
    }
}
