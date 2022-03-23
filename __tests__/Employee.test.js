const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('DOug', 17, 'doug@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Doug', 17, 'doug@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Doug', 17, 'doug@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Doug', 17, 'doug@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('gets employee role', () => {
    const employee = new Employee('Doug', 17, 'doug@email.com');

    expect(employee.getRole()).toBe("Employee");
})