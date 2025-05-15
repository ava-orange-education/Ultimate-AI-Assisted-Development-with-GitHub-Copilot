// Prompt Used: Design an OrderService class with clean modular methods for placing and canceling orders

import java.util.ArrayList;
import java.util.List;

public class OrderService {

    private final List<String> orders = new ArrayList<>();

    public String placeOrder(String order) {
        orders.add(order);
        return "Order placed: " + order;
    }

    public String cancelOrder(String order) {
        if (orders.remove(order)) {
            return "Order cancelled: " + order;
        } else {
            return "Order not found: " + order;
        }
    }

    public List<String> getAllOrders() {
        return orders;
    }
}
