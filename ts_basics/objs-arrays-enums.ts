const person: { name: string; age: number } = {
  name: "Asya",
  age: 24,
};
//Better to let TS infer the types like this
const person2 = {
  name: "Asya",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], //role: (string | number)[]
};

//es depqum role array-i vra karanq popoxutyunner anenq,

person2.role.push("admin");
person2.role[1] = 10;
//error chi ta es tarberakum

let favoriteActivities: string[];
favoriteActivities = ["Sports"]; //We can't add a number, for example, in this array.

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}
//hobby is considered as a string, so we can use string methods

//!Tuples
const person3: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple type
} = {
  name: "Asya",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
//ete unenq nenc array vortex hstak qanakov propertiner en u type anpopox, arden petqa type tanq, chenq karox toxnel inter ashxati

person3.role.push("admin"); //push works
//person3.role=[0, "A", "B"];//Error
// person3.role[1] = 10;// Error

//!Enums

enum Role {
  ADMIN, // 0
  READ_ONLY, //1
  AUTHOR, //2
}

enum Role2 {
  admin = 0, //0
  readOnly = "Read only", // Read only
  author = "Author", //Author
}
//Often, we can see enums with all-uppercase values but that's not a "must-do". You can go with any values names.
const person4 = {
  name: "Asya",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person4.role); //0

if (person4.role === Role.ADMIN) {
  console.log("is Author");
}

enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}

PrintMedia.Magazine; // returns  3
PrintMedia["Magazine"]; // returns  3
PrintMedia[3]; // returns  Magazine
