// Prompt: "Refactor this function for modularity and scalability. Ensure it handles additional salary components such as allowances or deductions in the future."

// Base salary component calculation
function calculateBaseSalary(employee) {
    return employee.baseSalary || 0;
}

// Bonus calculation
function calculateBonus(employee) {
    return employee.bonus || 0;
}

// Calculate allowances (expandable in the future)
function calculateAllowances(employee) {
    const allowances = {
        housing: employee.housingAllowance || 0,
        transport: employee.transportAllowance || 0,
        // Additional allowances can be added here
    };
    
    return Object.values(allowances).reduce((total, amount) => total + amount, 0);
}

// Calculate deductions (expandable in the future)
function calculateDeductions(employee, grossSalary) {
    const deductions = {
        tax: grossSalary * 0.2,
        insurance: employee.insuranceDeduction || 0,
        // Additional deductions can be added here
    };
    
    return Object.values(deductions).reduce((total, amount) => total + amount, 0);
}

// Calculate gross salary with all components
function calculateGrossSalary(employee) {
    const base = calculateBaseSalary(employee);
    const bonus = calculateBonus(employee);
    const allowances = calculateAllowances(employee);
    
    return base + bonus + allowances;
}

// Calculate the final net salary
function calculateNetSalary(employee) {
    const grossSalary = calculateGrossSalary(employee);
    const deductions = calculateDeductions(employee, grossSalary);
    
    return grossSalary - deductions;
}

// Main payroll calculation function
function calculatePayroll(employees) {
    return employees.map(employee => {
        const netSalary = calculateNetSalary(employee);
        return { ...employee, netSalary };
    });
}