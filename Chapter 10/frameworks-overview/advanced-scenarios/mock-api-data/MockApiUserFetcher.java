// Prompt: Create a utility that calls a mock API to get user data and parse JSON response

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MockApiUserFetcher {
    public static void main(String[] args) throws Exception {
        URL url = new URL("https://jsonplaceholder.typicode.com/users/1");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }

        in.close();
        System.out.println("User data from mock API: " + content.toString());
    }
}
