// ex2 

let input_arr = [25, 50, 43, 36, 31, 26, 24, 19, 28, 24, 4, 18, 16, 48, 47, 49, 42, 15, 3, 16];

for (let i = 0; i < input_arr.length; i++) {
    let currentItem = input_arr[i];
    for (let j = i + 1; j < input_arr.length; j++) {
        if (currentItem === input_arr[j]) {
            input_arr.splice(j, 1); 
            j--; 
        }
    }
}

console.log(input_arr);

// ex1

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) What is the average income of all the people in the array?

const numPeople = people.length;
let totalIncome = 0;

for (let i = 0; i < numPeople; i++) {
    totalIncome += parseInt(people[i].salary);
}

const averageIncome = totalIncome / numPeople;
console.log(`The average income of all the people in the array is $${averageIncome}.`);

// 2) Who are the people that are currently older than 30?


const today = new Date();
const currentYear = today.getFullYear();
const minAge = 30;

for (let i = 0; i < numPeople; i++) {
    const dobArr = people[i].DOB.split('/');
    const birthYear = parseInt(dobArr[2]);
    const age = currentYear - birthYear;
    
    if (age > minAge) {
        console.log(`${people[i].firstName} ${people[i].lastName} is currently over 30 years old.`);
    }
}

// 3) Get a list of the people's full name (firstName and lastName).

const fullNameList = [];

for (let i = 0; i < numPeople; i++) {
    const fullName = `${people[i].firstName} ${people[i].lastName}`;
    fullNameList.push(fullName);
}

console.log('List of full names:');
console.log(fullNameList);

// 4) Get a list of people in the array ordered from youngest to oldest.

function compareByDOB(personA, personB) {
    const dobArrA = personA.DOB.split('/');
    const dobArrB = personB.DOB.split('/');
    const yearA = parseInt(dobArrA[2]);
    const yearB = parseInt(dobArrB[2]);
    
    if (yearA < yearB) {
        return -1;
    } else if (yearA > yearB) {
        return 1;
    } else {
        return 0;
    }
}


people.sort(compareByDOB);

console.log('List of people sorted from youngest to oldest:');
console.log(people);

// 5) How many people are there in each department?

const deptCounts = {};

for (let i = 0; i < people.length; i++) {
    const dept = people[i].department;
    if (deptCounts[dept]) {
        deptCounts[dept]++;
    } else {
        deptCounts[dept] = 1;
    }
}

console.log('Number of people in each department:');
for (const dept in deptCounts) {
    console.log(`${dept}: ${deptCounts[dept]}`);
}