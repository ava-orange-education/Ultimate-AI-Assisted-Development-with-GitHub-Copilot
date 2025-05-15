// Prompt: Refactor the OWASP ZAP Java scanner to log scan results to a file and simulate an email alert for critical vulnerabilities found.

import org.zaproxy.clientapi.core.ClientApi;
import org.zaproxy.clientapi.core.ApiResponse;
import org.zaproxy.clientapi.core.Alert;

import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;

public class EnhancedZapScanner {
    private static final String ZAP_ADDRESS = "localhost";
    private static final int ZAP_PORT = 8080;
    private static final String API_KEY = ""; // Optional ZAP API key

    public static void main(String[] args) {
        try {
            ClientApi api = new ClientApi(ZAP_ADDRESS, ZAP_PORT, API_KEY);
            String targetUrl = "http://example.com";

            log("Starting scan for: " + targetUrl);
            api.core.accessUrl(targetUrl);
            Thread.sleep(5000);

            ApiResponse response = api.ascan.scan(targetUrl, "true", "false", null, null, null);
            String scanId = response.toString();

            int progress;
            do {
                Thread.sleep(2000);
                progress = Integer.parseInt(api.ascan.status(scanId).toString());
                log("Scan progress: " + progress + "%");
            } while (progress < 100);

            log("Scan completed. Reviewing alerts...");
            String alerts = api.core.alerts(targetUrl, null, null).toString();
            log("Vulnerability Report:\n" + alerts);

            if (alerts.contains("High")) {
                simulateEmailAlert("CRITICAL vulnerabilities found during ZAP scan at: " + targetUrl);
            }

        } catch (Exception e) {
            log("ZAP Scanner encountered an error: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static void log(String message) {
        try (PrintWriter writer = new PrintWriter(new FileWriter("zap-scan-log.txt", true))) {
            writer.println(LocalDateTime.now() + " :: " + message);
        } catch (Exception e) {
            System.err.println("Failed to write log: " + e.getMessage());
        }
    }

    private static void simulateEmailAlert(String message) {
        System.out.println("Simulated EMAIL ALERT: " + message);
        log("EMAIL ALERT TRIGGERED: " + message);
    }
}
