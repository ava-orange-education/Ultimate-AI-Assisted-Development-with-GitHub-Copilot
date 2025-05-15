// Prompt: Load test data from a JSON file using Jackson library

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;

public class JsonDataLoader {
    public static class User {
        public String username;
        public String email;
    }

    public static void main(String[] args) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        User user = mapper.readValue(new File("user.json"), User.class);
        System.out.println("Loaded user: " + user.username + ", " + user.email);
    }
}
