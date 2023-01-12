const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name field is required"] },
  rating: {
    type: Number,
    min: 1,
    max: [10, "max is 10"],
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Neem karoli bab loved apples",
});

// apple.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  _id: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const ajay = new Person({
  name: "Ajay",
  age: 23,
  _id: 1,
});

// ajay.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit to recover health",
});

const orange = new Fruit({
  name: "Orange",
  score: 10,
  review: "Fruits of my childhood",
});

const banana = new Fruit({
  name: "Banana",
  score: 10,
  review: "Favorite fruit of monkeys",
});

// Fruit.insertMany([kiwi, orange, banana], function (err, data) {
//   console.log(err, data);
// showFruits();
// });

function showCollection(collection) {
  [collection][0].find((err, fruits) => {
    if (err) console.log(err);
    else console.log(fruits.map((x) => x.name));

    // close the connection after we are done
    mongoose.connection.close();
  });
}

const guava = new Fruit({
  //   name: "guava || amrood",
  score: 10,
  review: "I have a unique relation with one guava tree",
});

// guava.save();

// // update the name of guava
// Fruit.updateOne(
//   { _id: "63c017481adc8ff7bcb8b1ad" },
//   { name: "Guava" },
//   console.log
// );

// delete a document
// Fruit.deleteOne({ name: "Guava" }, {}, console.log);

// Person.deleteMany({ name: "Ajay" }, console.log);

const pineapple = new Fruit({
  name: "Pineapple",
  review: "Awesome taste when sliced",
});

pineapple.save();

const person = new Person({
  _id: 3,
  name: "amy",
  age: 12,
  favoriteFruit: pineapple,
});
// person.save();

Person.updateOne({ name: "Ajay" }, { favoriteFruit: apple });

setTimeout(() => {
  showCollection(Person);
  showCollection(Fruit);
}, 1000);
