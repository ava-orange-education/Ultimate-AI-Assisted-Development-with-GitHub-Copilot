// GitHub Copilot Prompt:
// Use C++20 ranges to filter even numbers and calculate their squares

#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    auto squaredEvens = numbers 
        | std::views::filter([](int n) { return n % 2 == 0; })
        | std::views::transform([](int n) { return n * n; });

    std::cout << "Squared even numbers: ";
    for (int n : squaredEvens) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    return 0;
}
