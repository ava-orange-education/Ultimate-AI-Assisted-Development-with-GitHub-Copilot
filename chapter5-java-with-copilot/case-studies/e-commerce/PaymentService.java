// Prompt Used: Create a simple PaymentService class that simulates payment processing in an e-commerce app

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public String processPayment(double amount) {
        if (amount <= 0) {
            return "Invalid payment amount.";
        }
        return "Payment of $" + amount + " processed successfully!";
    }
}
