// Prompt: Refactor code to process orders more cleanly using Streams
import java.util.List;
import java.util.stream.Collectors;

public class OrderProcessor {
    public List<Order> process(List<Order> orders) {
        return orders.stream()
            .filter(Order::isValid)
            .map(order -> {
                order.setStatus("Processed");
                return order;
            })
            .collect(Collectors.toList());
    }
}
