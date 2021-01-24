// Free Code Camp
// Profile Lookup - basic algorithms and data structures
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
/* REQUIREMENTS
A lookUpProfile function that takes name and a property (prop) as arguments. 
The function should check if name is an actual contact's firstName and the 
given property (prop) is a property of that contact.
 + If both are true, then return the "value" of that property.
 + If name does not correspond to any contacts then return "No such contact".
 + If prop does not correspond to any valid properties of a contact found to 
     match name then return "No such property". */

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  let nameExists = false;
  for (var i = 0; i < contacts.length; i++) {
    if (Object.values(contacts[i]).includes(name)) {
      nameExists = true;
    }
    if (contacts[i].hasOwnProperty(prop) && nameExists) {
      return contacts[i][prop];
    }
  }
  if (nameExists == false) { return "No such contact"; } 
  if (nameExists) { return "No such property";}
}

console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Akira", "likes")  // array');
console.log(lookUpProfile("Akira", "likes"));  // array
console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Kristian", "lastName")  //"Vos"');
console.log(lookUpProfile("Kristian", "lastName"));  // "Vos"
console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Sherlock", "likes")  // ["Intriguing Cases", "Violin"]');
console.log(lookUpProfile("Sherlock", "likes"));  // ["Intriguing Cases", "Violin"]
console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Harry", "likes")  // array');
console.log(lookUpProfile("Harry", "likes"));  // array
console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Bob", "number")  // "No such contact"');
console.log(lookUpProfile("Bob", "number"));  // "No such contact"
console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Bob", "potato")  // "No such contact"');
console.log(lookUpProfile("Bob", "potato"));  // "No such contact"
console.log("\n---- ---- ---- ----");
console.log('lookUpProfile("Akira", "address")  // "No such property"');
console.log(lookUpProfile("Akira", "address"));  // "No such property"