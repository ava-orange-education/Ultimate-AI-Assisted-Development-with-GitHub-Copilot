// GitHub Copilot Prompt:
// Iterate through a map using structured bindings to print student grades

#include <iostream>
#include <map>

int main() {
    std::map<std::string, char> grades = {
        {"Alice", 'A'},
        {"Bob", 'B'},
        {"Charlie", 'C'}
    };

    std::cout << "Student Grades:" << std::endl;
    for (const auto& [name, grade] : grades) {
        std::cout << name << ": " << grade << std::endl;
    }

    return 0;
}
