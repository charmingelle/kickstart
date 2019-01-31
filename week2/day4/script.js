// /* base class */
// const BaseClass = function() {
//   this.name = "I'm BaseClass";
// };

// BaseClass.prototype = {
//   getName: function() {
//     return this.name;
//   },
//   setName: function(str) {
//     this.name = str;
//   }
// };

// /* sub class 1 */
// const SubClass1 = function() {
//   this.setName("I'm SubClass1");
// };

// /* sub class 2 */
// const SubClass2 = function() {
//   this.setName("I'm SubClass2");
// };

// const extend = (subClassName, className) => {
//   subClassName.prototype = new className();
//   subClassName.prototype.constructor = subClassName;
// };

// extend(SubClass1, BaseClass);
// extend(SubClass2, BaseClass);

// const base = new BaseClass();
// const sub1 = new SubClass1();
// const sub2 = new SubClass2();

// console.log(base.getName());
// console.log(sub1.getName());
// console.log(sub2.getName());

// console.log("base.__proto__", base.constructor.name);
// console.log("sub1.__proto__", sub1.constructor.name);
// console.log("sub2.__proto__", sub2.constructor.name);

// ---

// Function.prototype.bind = function(context, ...args) {
//   return (...newArgs) => this.call(context, ...args.concat(...newArgs));
// };

// /**
//  * Develop function for binding..
//  *
//  * Function.prototype.bind =
//  * */

// const someObj = {
//   someValue: "some value"
// };

// const someObjAnotherObject = {
//   someValue: "some another value"
// };

// const printSmth = function(text, moreText) {
//   console.log(text);
//   console.log(moreText);
//   console.log(this.someValue);
// };

// const firstBindFunc = printSmth.bind(someObj, "Before some value");
// const secondBindFunc = firstBindFunc.bind(
//   someObjAnotherObject,
//   "Before some other value",
//   "After before some other value"
// );

// console.log(firstBindFunc("After before somevalue"));
// console.log(secondBindFunc());

// ---

// Javascript task
// There is the class called Engine, which has one important method, called work. During the work, engine generates random errors.
// Each run can either generate or do not generate an error.

// We want to be able to monitor our engine.
// There are two classes called CarComputer and ServiceStation, both of these classes do have onError method.

// Please, update the current code, in order that both onError methods are called in case if engine generates new error
//  You should not do it from the for cycle, which calls the engine method work.

// Initial code: http://jsbin.com/zowosugaqi/1/edit?js,console

"use strict";

class ObserverForEngineError {
  static subscribe(newSubscriber) {
    if (!this.subscribers.includes(newSubscriber)) {
      this.subscribers.push(newSubscriber);
    }
  }

  static notifyAll(error) {
    this.subscribers.forEach(subscriber => subscriber.onError(error));
  }
}

ObserverForEngineError.subscribers = [];

class Engine {
  get errors() {
    return {
      E100: "Lack of fuel",
      E200: "No ignition",
      E300: "Resourse exhausted"
    };
  }

  work() {
    // error happens
    if (_.random(1, 5) === 5) {
      let key = _(this.errors)
        .keys()
        .sample();

      ObserverForEngineError.notifyAll({ key: key, value: this.errors[key] });
      return { key: key, value: this.errors[key] };
    }
  }
}

class CarComputer {
  onError(error) {
    console.log("CC:", error);
  }
}

class ServiceStation {
  onError(error) {
    console.log("SS:", error);
  }
}

let engine = new Engine();
let carComputer = new CarComputer();
let serviceStation = new ServiceStation();

ObserverForEngineError.subscribe(carComputer);
ObserverForEngineError.subscribe(serviceStation);

console.log("===============");
console.log("=== NEW RUN ===");
console.log("===============");

for (let i = 0; i < 10; i++) {
  engine.work();
}
