// Prompt Used: Define a Java class Product with validation annotations for name and price

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class Product {

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotNull(message = "Price is mandatory")
    @Min(value = 1, message = "Price must be greater than zero")
    private Double price;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
