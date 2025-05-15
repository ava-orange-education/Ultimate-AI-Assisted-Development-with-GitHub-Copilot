// Prompt: Fix SQL injection vulnerability in login logic
import java.sql.*;

public class LoginService {
    public boolean authenticate(String username, String password) {
        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/app", "root", "");
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username=? AND password=?")) {

            stmt.setString(1, username);
            stmt.setString(2, password);

            ResultSet rs = stmt.executeQuery();
            return rs.next();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}
