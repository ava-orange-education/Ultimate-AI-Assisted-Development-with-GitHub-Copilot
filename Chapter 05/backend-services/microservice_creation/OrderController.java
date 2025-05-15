// Prompt Used: Create a simple Spring Boot REST microservice controller to manage orders

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final List<String> orders = new ArrayList<>();

    @GetMapping
    public List<String> getAllOrders() {
        return orders;
    }

    @PostMapping
    public String createOrder(@RequestBody String order) {
        orders.add(order);
        return "Order created: " + order;
    }

    @DeleteMapping("/{order}")
    public String deleteOrder(@PathVariable String order) {
        if (orders.remove(order)) {
            return "Order deleted: " + order;
        } else {
            return "Order not found: " + order;
        }
    }
}
