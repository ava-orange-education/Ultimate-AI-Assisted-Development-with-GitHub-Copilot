// Prompt: Generate a Java program that launches OWASP ZAP in daemon mode and runs an active scan on a target web application, then prints the vulnerabilities found.

import org.zaproxy.clientapi.core.ClientApi;
import org.zaproxy.clientapi.core.ApiResponse;
import java.util.List;

public class ZapScanner {
    private static final String ZAP_ADDRESS = "localhost";
    private static final int ZAP_PORT = 8080;
    private static final String API_KEY = ""; // Set your ZAP API key if required

    public static void main(String[] args) {
        try {
            ClientApi api = new ClientApi(ZAP_ADDRESS, ZAP_PORT, API_KEY);
            String targetUrl = "http://example.com";

            System.out.println("Initiating passive scan on target: " + targetUrl);
            api.core.accessUrl(targetUrl);
            Thread.sleep(5000);

            System.out.println("Starting active scan...");
            ApiResponse response = api.ascan.scan(targetUrl, "true", "false", null, null, null);
            String scanId = response.toString();

            int progress;
            do {
                Thread.sleep(2000);
                progress = Integer.parseInt(((ApiResponse) api.ascan.status(scanId)).toString());
                System.out.println("Scan progress: " + progress + "%");
            } while (progress < 100);

            System.out.println("Scan completed. Fetching alerts...");
            System.out.println(api.core.alerts(targetUrl, null, null));

        } catch (Exception e) {
            System.err.println("ZAP Scanner failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
