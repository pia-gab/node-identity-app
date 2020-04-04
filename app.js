const fs = require('fs');

const gender=['F', 'M'];

const femName = [
  'ala',
  'ola',
  'pola',
  'zola',
  'misia',
  'krysia',
  'anka',
  'skakanka',
  'konstancja',
  'nadiezda',
  'karola',
];

const maleName = [
  'arek',
  'marek',
  'czarek',
  'franek',
  'adam',
  'konstanty',
  'bozydar',
  'franklin',
  'beniamin',
  'adolf',
  'siergiej',
];

const lastName = [
  'kowal',
  'owal',
  'wilson',
  'kotow',
  'molotow',
  'nazwk1',
  'nazwk2',
  'nazwk3',
  'nazwk4',
  'nazwk5',
  'nazwk6',
];

randChioce= arr => {
  arr[Math.floor(Math.random() * arr.length)]
}

const people = [];

for (let i = 0; i <=20; i++) {
  let onePerson = {};

  onePerson.gender =randChioce(gender);

  let getName = () => {
    if (onePerson.gender === 'F') {
      return randChioce(femName);
    } else {
      return randChioce(maleName);
    }
  }

  onePerson.name = getName();

  onePerson.surname = lastName[Math.floor(Math.random() * lastName.length)];
  onePerson.age = Math.floor(Math.random() * (50 - 18 + 1)) + 18;
  people.push(onePerson);
}


const data = JSON.stringify(people);

fs.writeFile('people.json', data, err => {
	if (err) throw err;
	console.log('The file has been saved!');
});

console.log(data);

