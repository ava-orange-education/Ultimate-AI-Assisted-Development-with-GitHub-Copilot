// Prompt: Create Rest Assured test for payment API
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.Test;

public class PaymentApiTest {

    @Test
    public void testPaymentSuccess() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .body("{ \"amount\": 100, \"method\": \"credit\" }")
        .when()
            .post("https://api.example.com/pay")
        .then()
            .statusCode(200);
    }

    @Test
    public void testAuthenticationError() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .header("Authorization", "InvalidToken")
            .body("{ \"amount\": 100, \"method\": \"credit\" }")
        .when()
            .post("https://api.example.com/pay")
        .then()
            .statusCode(401);
    }

    @Test
    public void testInvalidCardResponse() {
        RestAssured.given()
            .contentType(ContentType.JSON)
            .body("{ \"amount\": 100, \"method\": \"invalid_card\" }")
        .when()
            .post("https://api.example.com/pay")
        .then()
            .statusCode(400);
    }
}
