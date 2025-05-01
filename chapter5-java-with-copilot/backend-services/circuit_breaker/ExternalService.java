// Prompt Used: Create a Spring Boot service that uses Resilience4j CircuitBreaker for external API call resilience

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalService {

    private final RestTemplate restTemplate = new RestTemplate();

    @CircuitBreaker(name = "externalService", fallbackMethod = "fallbackMethod")
    public String callExternalApi() {
        String url = "https://example.com/api/resource";
        return restTemplate.getForObject(url, String.class);
    }

    public String fallbackMethod(Exception ex) {
        return "Fallback response: Service unavailable";
    }
}
