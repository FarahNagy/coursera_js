const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'java' },
    { id: 4, name: 'Farah Nagy', age: 23, department: 'Tech', salary: 30000, specialization: 'cybersecurity' }
];


function displayEmployees() {
    const employeesDeets = employees.map((item) => `<p> Employee ${item.id}: ${item.name} - age: ${item.age} - department: ${item.department} - salary: $${item.salary} <p>`
    ).join('');



    document.getElementById('employeesDetails').innerHTML = employeesDeets;
}


function calculateTotalSalaries() {
    const totalSals = employees.reduce((acc, curr) => { return acc + curr.salary }, 0)
    alert(`Total of salaries is $${totalSals}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(e => e.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(e => `<p> Employee ${e.id}: ${e.name} - age: ${e.age} - department: ${e.department} - salary: $${e.salary} <p>`
    ).join('');

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(id) {
    const foundEmp = employees.find(e => e.id === id);
    if (foundEmp)
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmp.id}: ${foundEmp.name}: - ${foundEmp.department} - $${foundEmp.salary}</p>`;
    else
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

}


function findEmployeeBySpecialization(specialization) {
    const foundEmp = employees.find(e => e.specialization === specialization);
    if (foundEmp)
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmp.id}: ${foundEmp.name}: - ${foundEmp.department} - $${foundEmp.salary}</p>`;
    else
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';
}
