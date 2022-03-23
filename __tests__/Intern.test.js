const Intern = require('../lib/Intern');

test('Create Intern object', () => {
    const intern = new Intern('Dougie', 5, 'Dougie@email.com', 'UofU');

    expect(intern.school).toEqual(expect.any(String));
});

test('Gets School', () => {
    const intern = new Intern('Dougie', 5, 'Dougie@email.com', 'UofU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get intern role', () => {
    const intern = new Intern('Dougie', 5, 'Dougie@email.com', 'UofU');

    expect(intern.getRole()).toEqual('Intern');
});