// Prompt Used: Group a list of orders by status using Java streams and collect into a Map

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class OrderGrouper {

    static class Order {
        int id;
        String status;

        Order(int id, String status) {
            this.id = id;
            this.status = status;
        }
    }

    public static void main(String[] args) {
        List<Order> orders = Arrays.asList(
            new Order(1, "Pending"),
            new Order(2, "Completed"),
            new Order(3, "Pending"),
            new Order(4, "Shipped")
        );

        Map<String, List<Order>> groupedOrders = orders.stream()
                .collect(Collectors.groupingBy(order -> order.status));

        groupedOrders.forEach((status, ordersList) -> {
            System.out.println("Status: " + status);
            ordersList.forEach(order -> System.out.println("  Order ID: " + order.id));
        });
    }
}
