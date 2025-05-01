// Prompt Used: Create a Spring Boot REST controller for managing Product resources with CRUD endpoints

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final List<Product> products = new ArrayList<>();

    @GetMapping
    public List<Product> getAllProducts() {
        return products;
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        products.add(product);
        return product;
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return products.get(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product updatedProduct) {
        products.set(id, updatedProduct);
        return updatedProduct;
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        products.remove(id);
        return "Product deleted successfully!";
    }
}
