const employees = [
    {id: 1, name: 'Alice', position: 'Software Engineer', salary: 90000},
    {id: 2, name: 'Bob', position: 'Product Manager', salary: 95000},
    {id: 3, name: 'Charlie', position: 'Designer', salary: 70000},
    {id: 4, name: 'David', position: 'Data Scientist', salary: 120000},
];

const employee = employees.find((e) => e.id === 2);
console.log(`Details of employee \nname: ${employee.name}\nposition: ${employee.position}\nsalary: $${employee.salary}`);   