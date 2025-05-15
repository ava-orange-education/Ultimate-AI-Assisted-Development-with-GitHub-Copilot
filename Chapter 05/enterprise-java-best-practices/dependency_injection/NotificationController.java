// Prompt Used: Create a Spring Boot controller that uses constructor-based dependency injection for a NotificationService

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/send")
    public String sendNotification(@RequestParam String message) {
        return notificationService.sendNotification(message);
    }
}

@Service
class NotificationService {
    public String sendNotification(String message) {
        return "Notification sent: " + message;
    }
}
