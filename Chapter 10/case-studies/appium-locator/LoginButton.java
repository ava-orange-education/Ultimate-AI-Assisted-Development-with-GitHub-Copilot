// Prompt: Define mobile locator for login button in Appium
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;

public class LoginButton {
    @AndroidFindBy(id = "com.example.app:id/loginBtn")
    private MobileElement loginButton;

    public void tapLogin() {
        loginButton.click();
    }
}
