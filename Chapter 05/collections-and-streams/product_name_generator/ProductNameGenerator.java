// Prompt Used: Generate a list of product names from a list of Product objects using Java streams

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ProductNameGenerator {

    static class Product {
        String name;
        double price;

        Product(String name, double price) {
            this.name = name;
            this.price = price;
        }
    }

    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
            new Product("Laptop", 999.99),
            new Product("Phone", 699.99),
            new Product("Tablet", 299.99)
        );

        List<String> productNames = products.stream()
                .map(product -> product.name)
                .collect(Collectors.toList());

        productNames.forEach(System.out::println);
    }
}
