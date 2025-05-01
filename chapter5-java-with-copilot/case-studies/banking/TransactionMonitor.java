// Prompt Used: Create a banking transaction monitor service that flags transactions above a threshold

import org.springframework.stereotype.Service;

@Service
public class TransactionMonitor {

    private static final double THRESHOLD = 10000.0;

    public String monitorTransaction(double amount) {
        if (amount > THRESHOLD) {
            return "Transaction flagged: Amount exceeds threshold!";
        } else {
            return "Transaction approved.";
        }
    }
}
