// Prompt Used: Create a Spring Boot REST endpoint that returns paginated results

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController
@RequestMapping("/items")
public class ItemController {

    private final List<String> items = IntStream.range(1, 101)
            .mapToObj(i -> "Item " + i)
            .collect(Collectors.toList());

    @GetMapping
    public List<String> getItems(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        int start = page * size;
        int end = Math.min(start + size, items.size());
        return items.subList(start, end);
    }
}
