// Prompt Used: Create a Spring Boot REST controller for managing products in an e-commerce application

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/ecommerce/products")
public class ProductController {

    private final List<String> products = new ArrayList<>();

    @GetMapping
    public List<String> getAllProducts() {
        return products;
    }

    @PostMapping
    public String addProduct(@RequestBody String product) {
        products.add(product);
        return "Product added: " + product;
    }

    @DeleteMapping("/{product}")
    public String deleteProduct(@PathVariable String product) {
        if (products.remove(product)) {
            return "Product removed: " + product;
        } else {
            return "Product not found.";
        }
    }
}
