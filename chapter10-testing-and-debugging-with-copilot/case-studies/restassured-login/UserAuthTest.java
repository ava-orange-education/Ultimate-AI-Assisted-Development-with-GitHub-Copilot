// Prompt: Rest Assured login API test case
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.Test;

public class UserAuthTest {
    @Test
    public void loginApiTest() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .body("{ \"username\": \"test\", \"password\": \"test123\" }")
        .when()
            .post("https://api.example.com/auth/login")
        .then()
            .statusCode(200);
    }
}
