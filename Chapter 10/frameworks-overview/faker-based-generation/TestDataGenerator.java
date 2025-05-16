// Prompt: Generate fake user data for registration test using Java Faker

import com.github.javafaker.Faker;

public class TestDataGenerator {
    public static void main(String[] args) {
        Faker faker = new Faker();

        String fullName = faker.name().fullName();
        String email = faker.internet().emailAddress();
        String phone = faker.phoneNumber().cellPhone();

        System.out.println("Name: " + fullName);
        System.out.println("Email: " + email);
        System.out.println("Phone: " + phone);
    }
}
