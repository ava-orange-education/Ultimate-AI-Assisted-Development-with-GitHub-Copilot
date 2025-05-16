// Prompt: "Refactor this function to improve modularity."

// Helper function to calculate gross salary
function calculateGrossSalary(employee) {
    return employee.baseSalary + employee.bonus;
}

// Helper function to calculate tax
function calculateTax(grossSalary) {
    return grossSalary * 0.2;
}

// Helper function to calculate net salary
function calculateNetSalary(employee) {
    const grossSalary = calculateGrossSalary(employee);
    const tax = calculateTax(grossSalary);
    return grossSalary - tax;
}

// Main function to calculate payroll
function calculatePayroll(employees) {
    return employees.map(employee => {
        employee.netSalary = calculateNetSalary(employee);
        return employee;
    });
}