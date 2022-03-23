const Engineer = require('../lib/Engineer');

test('Create Engineer object', () => {
    const engineer = new Engineer('Douglas', 12, 'Douglas@email.com', 'douglasgithub')

    expect(engineer.github).toEqual(expect.any(String));
});

test('Get Engineers Github',()=>{
    const engineer = new Engineer('Douglas', 12, 'Douglas@email.com', 'douglasgithub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('Get Engineers role',()=>{
    const engineer = new Engineer('Douglas', 12, 'Douglas@email.com', 'douglasgithub')

    expect(engineer.getRole()).toEqual('Engineer');
})