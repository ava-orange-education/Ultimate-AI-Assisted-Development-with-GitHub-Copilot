// Prompt: Appium test for Android login screen
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.junit.Test;

public class LoginTest {
    AndroidDriver<MobileElement> driver;

    @Test
    public void loginTest() {
        driver.findElementById("username").sendKeys("user");
        driver.findElementById("password").sendKeys("pass123");
        driver.findElementById("loginBtn").click();
    }
}
