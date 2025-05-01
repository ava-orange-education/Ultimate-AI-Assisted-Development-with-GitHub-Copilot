// Prompt: Refactor this payroll logic to improve readability
function calculatePayroll(employees) {
  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let grossPay = employee.hours * employee.rate;
    let tax = grossPay * 0.25;
    employee.netPay = grossPay - tax;
  }
  return employees;
}
