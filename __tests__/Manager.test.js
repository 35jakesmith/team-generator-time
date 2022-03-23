const Manager = require('../lib/Manager');

test('Creates the Manager object',() => {
    const manager = new Manager('Chadwick', 99, 'chadwick@email.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Get office number', () => {
    const manager = new Manager('Chadwick', 99, 'chadwick@email.com', 4);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('Get Manager role', () => {
    const manager = new Manager('Chadwick', 99, 'chadwick@email.com', 4);

    expect(manager.getRole()).toEqual('Manager');
});