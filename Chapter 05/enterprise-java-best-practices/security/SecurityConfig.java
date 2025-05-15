// Prompt Used: Create a basic Spring Security configuration class that permits all requests but requires authentication

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .anyRequest().authenticated()
            )
            .httpBasic(); // Use basic auth
        return http.build();
    }
}
