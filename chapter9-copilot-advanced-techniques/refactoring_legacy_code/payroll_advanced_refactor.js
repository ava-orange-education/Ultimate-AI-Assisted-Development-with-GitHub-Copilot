// Prompt: Extract constants, add validations, and support different tax slabs
const DEFAULT_TAX_RATE = 0.25;

function calculatePayroll(employees) {
  return employees.map(e => {
    validateEmployee(e);
    const gross = e.hours * e.rate;
    const tax = getTaxRate(e.role) * gross;
    return { ...e, netPay: gross - tax };
  });
}

function validateEmployee(e) {
  if (!e.hours || !e.rate) throw new Error("Invalid employee data");
}

function getTaxRate(role) {
  if (role === 'manager') return 0.30;
  return DEFAULT_TAX_RATE;
}
