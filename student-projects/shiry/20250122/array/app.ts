


type Employee = {
    name: string,
    age: number,
    department: string,
    sallary: number,
};


const employees : Employee[]=[];

for(let i=0 ; i<5 ; i++) {
    const employeeName = prompt("what is the employee name?") ?? "";
    const employeeage = Number(prompt("what is the employee age?"));
    const employeedepartment = prompt("what is the employee department?")?? "";
    const employeesallary = Number(prompt("what is the employee sallary?"));

    employees.push({
        name: employeeName,
        age: employeeage,
        department: employeedepartment,
        sallary: employeesallary
    });




}

