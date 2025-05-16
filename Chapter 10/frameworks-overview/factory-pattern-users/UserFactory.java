// Prompt: Create a UserFactory to generate valid and invalid test users

import com.github.javafaker.Faker;

public class UserFactory {

    public static class User {
        public String username;
        public String password;
        public String email;

        public User(String username, String password, String email) {
            this.username = username;
            this.password = password;
            this.email = email;
        }
    }

    public static User createValidUser() {
        Faker faker = new Faker();
        return new User(faker.name().username(), "ValidPass123", faker.internet().emailAddress());
    }

    public static User createInvalidUser() {
        return new User("", "", "invalid_email_format");
    }
}
