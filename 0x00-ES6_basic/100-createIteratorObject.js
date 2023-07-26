export default function* createIteratorObject(report) {
  for (const department in report.allEmployees) {
    const employeesList = report.allEmployees[department];
    for (const employee of employeesList) {
      yield employee;
    }
  }
}
