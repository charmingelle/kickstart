/**
 * Implement the tests below. Don't forget to use isArrayEqual to check
 * that two arrays are equal when testing.
 */

/**
 * Use Array.map to write the function below that returns an array
 * which is the uppercases all the strings in an array
 *
 * upperCaseArray(['hello', 'world']) => ['HELLO', 'WORLD']
 * upperCaseArray([]) => []
 *
 */

function upperCaseArray(array) {
  return array.map(el => el.toUpperCase());
}

/**
 * Use Array.filter to write a function below that returns
 * an array that contains only strings that include the string 'str'
 *
 * onlyIncludes(['helloy', 'boy', 'Baby'], 'oy') => ['helloy', 'boy']
 *
 */

function onlyIncludes(array, str) {
  array.filter(el => el.includes(str));
}

/**
 * Write a function repeat that repeats a call to a function n times.
 *
 * repeat(() => console.log('hi'), 3) => prints hi
 *                                              hi
 *                                              hi
 */

function repeat(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

function reduce(array, func, initialValue = 0) {
  array.forEach((el, index) => {
    initialValue = func(initialValue, el, index, array);
  });
  return initialValue;
}

var name = "Peter Pan";

function getGlobalVar() {
  return this.name;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 47,
  getAge: function() {
    return this.age;
  },

  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 47,
  pet: {
    name: "Daisy",
    age: 5
  },
  getPetAge: function() {
    const that = this;

    function getPet() {
      return that.pet;
    }

    const pet = getPet();

    return pet.age;
  }
};

// console.log(person1.getPetAge());
// 5

const person2 = {
  firstName: "John",
  lastName: "Doe",
  getFullname: function() {
    // Keep this line as is
    return this.firstName + " " + this.lastName;
  }
};

const calc = a => b => (b === undefined ? a : calc(a + b));

// console.log(calc(1)(2)());
// console.log(calc(1)(2)(3)(4)());

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}
class Square extends Polygon {
  constructor(size) {
    super(size, size);
  }
}

const square = new Square(4);

// console.log(square.area()); // 16
