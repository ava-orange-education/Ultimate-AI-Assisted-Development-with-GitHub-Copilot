// Prompt Used: Configure Spring Security to require authentication for banking APIs but allow monitoring endpoint to be public

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/monitor/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic();
        return http.build();
    }
}
