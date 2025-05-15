// Prompt: Rest Assured login API test case
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.Test;
import static org.hamcrest.Matchers.*;

public class UserAuthTest {
    @Test
    public void loginApiTest() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .body("{ \"username\": \"test\", \"password\": \"test123\" }")
        .when()
            .post("https://api.example.com/auth/login")
        .then()
            .statusCode(200)
            .body("token", notNullValue());
    }

    @Test
    public void loginApiTestWithIncorrectCredentials() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .body("{ \"username\": \"wrongUser\", \"password\": \"wrongPass\" }")
        .when()
            .post("https://api.example.com/auth/login")
        .then()
            .statusCode(401)
            .body("error", equalTo("Unauthorized"));
    }

    @Test
    public void loginApiTestResponseStructure() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .body("{ \"username\": \"test\", \"password\": \"test123\" }")
        .when()
            .post("https://api.example.com/auth/login")
        .then()
            .statusCode(200)
            .body("token", notNullValue())
            .body("user.id", notNullValue())
            .body("user.username", equalTo("test"));
    }
}
