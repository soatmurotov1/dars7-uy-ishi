// Mahsulov nomi - ?
// Mahsulot miqdori - ?
// Mahsulot narxi - ?
// yana Mahsulot qo'shasizmi?

function getInfo() {
  const product = {};
  const productName = prompt("Mahsulot nomi?");
  if (!productName || productName.length == 0 || productName == undefined) {
    console.log("To'g'ri nom kiriting!");
  }
  product.name = productName;
  const productWeight = +prompt("Mahsulot miqdori?");
  if (isNaN(productWeight)) {
    console.log("To'g'ri moqdorini to'g'ri kiriting!");
  }
  product.weight = productWeight;

  const productPrice = +prompt("Mahsulot narxi?");
  if (isNaN(productPrice)) {
    console.log("To'g'ri narxini to'g'ri kiriting!");
  }

  product.price = productPrice;

  return product;
}

function productCalc(callback) {
  alert(`Assalomu alaykum Bizning shopimizga hush kelibsiz:)`);
  const userName = prompt("Ismingiz?");

  const products = [];
  const confirmation = confirm(`${userName} Siz mahsulot olishni hohlaysizmi?`);
  if (confirmation) {
    const product = callback();
    products.push(product);
  }
}

// productCalc(getInfo);




function logInfo(name, lastName, birth) {
  let d = new Date();
  let thisYear = d.getFullYear();
  console.log(
    `Assalomu alaykum ${name} ${lastName} siz  ${thisYear - birth}  yoshdasiz`,
  );
}

function getInfo(callback) {
  let name = prompt("Ismingizni kiriting! ");
  let lastName = prompt("Familyangizni kiriting! ");
  let birthYear = Number(prompt("Tug'ulgan yilizni kiriting! "));

  let tasdiqlash = confirm(
    "Agar siz to'g'ri ma'lumot kiritgan bo'lsangiz y aks holda n bosing!",
  );
  if (tasdiqlash) {
    callback(name, lastName, birthYear);
  } else {
    alert("Malumotlarizni boshqatan kirting!");
    getInfo(logInfo);
  }
}

getInfo(logInfo);

let d = new Date();
thisYear = d.getFullYear(); // 2025


 console.log(new Date());
console.log(Date.now());

console.log(Math.floor(Math.random() * 100) + 1);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}

const person = new Person("Umar", 33);
const ali = new Person("Ali", 22);

delete ali.age;
delete ali.name;
delete ali.greet;

console.log("name" in ali);
console.log(ali["name"]);
console.log(person);
console.log(ali);

const person2 = {
  name: "Usmon",
  age: 44,
  gender: "Male",
  greet: () => {
    console.log(this);
  },
  obj: {
    name: "I",
    key: "VALUE",
    any: () => {
      console.log(this);
    },
  },
};

let key = "age";

console.log(person2[key]);
/*
const person = {
  name: "Usmon",
  age: 44,
  gender: "Male",
  greet: () => {
    console.log(this);
  },
  obj: {
    name: "I",
    key: "VALUE",
    any: () => {
      console.log(this);
    },
  },
};
// person.obj.any();
person["obj"]["any"]();

console.log(person.skills);
console.log(person["skills"]);

// const car = {
//   name: "BMW",
//   model: "X5",
//   year: "2024",
//   start: function () {
//     console.log(car);
//     console.log("START");
//   },
// };
// person.greet();

*/
