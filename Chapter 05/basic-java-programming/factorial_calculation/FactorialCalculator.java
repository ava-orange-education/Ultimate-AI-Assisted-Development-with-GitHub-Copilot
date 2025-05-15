// Prompt Used: Write a Java program to calculate the factorial of a number using recursion

public class FactorialCalculator {

    public static int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        int number = 5; // Example input
        int result = factorial(number);
        System.out.println("The factorial of " + number + " is: " + result);
    }
}
