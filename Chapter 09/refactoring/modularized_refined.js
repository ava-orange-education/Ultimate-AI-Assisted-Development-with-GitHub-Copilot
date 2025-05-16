// Prompt: "Refactor this function by breaking it into smaller, reusable functions for gross salary, tax, and net salary calculation."

function calculateGrossSalary(employee) {
    return employee.baseSalary + employee.bonus;
}

function calculateTax(grossSalary) {
    return grossSalary * 0.2;
}

function calculateNetSalary(employee) {
    const grossSalary = calculateGrossSalary(employee);
    const tax = calculateTax(grossSalary);
    return grossSalary - tax;
}

function calculatePayroll(employees) {
    for (let i = 0; i < employees.length; i++) {
        employees[i].netSalary = calculateNetSalary(employees[i]);
    }
    return employees;
}