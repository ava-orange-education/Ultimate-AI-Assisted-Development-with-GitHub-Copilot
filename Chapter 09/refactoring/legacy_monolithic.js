// Legacy monolithic payroll function

function calculatePayroll(employees) {
    for (let i = 0; i < employees.length; i++) {
      let grossSalary = employees[i].baseSalary + employees[i].bonus;
      let tax = grossSalary * 0.2;
      employees[i].netSalary = grossSalary - tax;
    }
    return employees;
  }