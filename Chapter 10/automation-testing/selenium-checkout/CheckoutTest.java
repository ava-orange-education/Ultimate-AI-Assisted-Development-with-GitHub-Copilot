// Prompt: Write Selenium Test for checkout flow using POM
public class CheckoutTest {
    WebDriver driver;

    @Before
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://example.com");
    }

    @Test
    public void testCheckoutFlow() {
        HomePage homePage = new HomePage(driver);
        ProductPage productPage = new ProductPage(driver);
        CartPage cartPage = new CartPage(driver);
        CheckoutPage checkoutPage = new CheckoutPage(driver);

        homePage.searchProduct("laptop");
        productPage.selectVariant("Silver");
        productPage.addToCart();

        Assert.assertTrue(cartPage.isCartNotEmpty(), "Cart is empty after adding product.");
        cartPage.proceedToCheckout();

        checkoutPage.enterBillingDetails("John Doe", "john.doe@example.com", "1234567890", "123 Test Street", "Test City", "California", "90001");
        checkoutPage.placeOrder();
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
