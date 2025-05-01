// Prompt: Refactor payroll function using map and separate logic
function calculatePayroll(employees) {
  return employees.map(e => ({
    ...e,
    netPay: computeNetPay(e.hours, e.rate)
  }));
}

function computeNetPay(hours, rate) {
  const gross = hours * rate;
  const tax = gross * 0.25;
  return gross - tax;
}
