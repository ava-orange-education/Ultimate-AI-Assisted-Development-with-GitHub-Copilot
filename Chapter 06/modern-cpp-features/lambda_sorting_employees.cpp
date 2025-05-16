// GitHub Copilot Prompt:
// Sort a vector of employees by salary using a lambda function

#include <iostream>
#include <vector>
#include <algorithm>

struct Employee {
    std::string name;
    double salary;
};

int main() {
    std::vector<Employee> employees = {
        {"Alice", 50000},
        {"Bob", 60000},
        {"Charlie", 55000}
    };

    std::sort(employees.begin(), employees.end(), [](const Employee& a, const Employee& b) {
        return a.salary < b.salary;
    });

    std::cout << "Employees sorted by salary:" << std::endl;
    for (const auto& emp : employees) {
        std::cout << emp.name << ": $" << emp.salary << std::endl;
    }

    return 0;
}
