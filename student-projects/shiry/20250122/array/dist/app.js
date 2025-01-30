var _a, _b;
var employees = [];
for (var i = 0; i < 5; i++) {
    var employeeName = (_a = prompt("what is the employee name?")) !== null && _a !== void 0 ? _a : "";
    var employeeage = Number(prompt("what is the employee age?"));
    var employeedepartment = (_b = prompt("what is the employee department?")) !== null && _b !== void 0 ? _b : "";
    var employeesallary = Number(prompt("what is the employee sallary?"));
    employees.push({
        name: employeeName,
        age: employeeage,
        department: employeedepartment,
        sallary: employeesallary
    });
}
