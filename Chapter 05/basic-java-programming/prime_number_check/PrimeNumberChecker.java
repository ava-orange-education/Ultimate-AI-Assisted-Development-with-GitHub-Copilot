// Prompt Used: Write a Java function that checks whether a number is prime

public class PrimeNumberChecker {

    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int number = 29; // Example input
        boolean result = isPrime(number);
        if (result)
            System.out.println(number + " is a prime number.");
        else
            System.out.println(number + " is not a prime number.");
    }
}
