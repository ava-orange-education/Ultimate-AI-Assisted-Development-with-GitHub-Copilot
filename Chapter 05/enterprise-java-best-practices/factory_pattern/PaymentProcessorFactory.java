// Prompt Used: Create a simple factory pattern in Java to return payment processor objects based on payment method

interface PaymentProcessor {
    void processPayment(double amount);
}

class CreditCardProcessor implements PaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment of $" + amount);
    }
}

class PayPalProcessor implements PaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment of $" + amount);
    }
}

class PaymentProcessorFactory {
    public static PaymentProcessor getProcessor(String type) {
        if ("creditcard".equalsIgnoreCase(type)) {
            return new CreditCardProcessor();
        } else if ("paypal".equalsIgnoreCase(type)) {
            return new PayPalProcessor();
        }
        throw new IllegalArgumentException("Unknown payment type: " + type);
    }
}

// Example usage:
class PaymentApp {
    public static void main(String[] args) {
        PaymentProcessor processor = PaymentProcessorFactory.getProcessor("creditcard");
        processor.processPayment(150.0);
    }
}
