const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];
const specificUser = users.find( ({firstName}) => firstName === 'Jose');
console.log(specificUser);

const premiumMembers = users.filter(({isPremiumMember}) => isPremiumMember === true);
console.log(premiumMembers);

const usersLastNames = users.map( ({lastName}) => lastName + ' is a user.');
console.log(usersLastNames);

const consistentLogins = users.filter( ({logins}) => logins > 10);
console.log(consistentLogins);

const totalLogins = [35, 3, 12, 5, 16, 53, 23, 9].reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalLogins);