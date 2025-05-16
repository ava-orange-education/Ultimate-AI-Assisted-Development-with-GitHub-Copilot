// Prompt Used: Count the number of tests passed and failed in a test result list using Java streams

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class TestCounter {

    public static void main(String[] args) {
        List<String> testResults = Arrays.asList(
            "passed", "failed", "passed", "passed", "failed", "passed"
        );

        Map<String, Long> resultCount = testResults.stream()
                .collect(Collectors.groupingBy(result -> result, Collectors.counting()));

        resultCount.forEach((result, count) -> 
            System.out.println(result + ": " + count)
        );
    }
}
