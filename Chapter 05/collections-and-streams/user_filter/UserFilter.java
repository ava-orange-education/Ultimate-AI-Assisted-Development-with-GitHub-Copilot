// Prompt Used: Write a Java program to filter a list of users whose age is greater than 18 using streams

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class UserFilter {

    static class User {
        String name;
        int age;

        User(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }

    public static void main(String[] args) {
        List<User> users = Arrays.asList(
            new User("Alice", 17),
            new User("Bob", 21),
            new User("Charlie", 19)
        );

        List<User> adults = users.stream()
                .filter(user -> user.age > 18)
                .collect(Collectors.toList());

        adults.forEach(user -> System.out.println(user.name + " is an adult."));
    }
}
