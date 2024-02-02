// 1
/*
const counter1 = new Object({ a: 1 });
const counter2 = Object.assign({}, { a: 2 });
const counter3 = Object.create({}, { a: { value: 3 } });
const counter4 = {};
Object.defineProperty(counter4, 'a', { value: 4 });
const counter5 = {};
Object.defineProperties(counter5, { a: { value: 5 } });
const counter6 = { a: 6 };
*/
// 2
/*
const mainCounter = {
  a: {
    b: 'c',
    d: {
      e: 'f',
      g: ['h', 'i'],
    },
  },
  j: new Date('2023-10-10'),
};
// Неправильное копирование объектов, так как сохраняются ссылки
const counter1 = { ...mainCounter };

const counter2 = Object.assign({}, mainCounter);

const counter3 = Object.create(
  Object.getPrototypeOf(mainCounter),
  Object.getOwnPropertyDescriptors(mainCounter)
);
// Правильно копирование, однако не всегда работает 
const counter4 = JSON.parse(JSON.stringify(mainCounter));
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}
const counter5 = deepCopy(mainCounter);
const counter6 = structuredClone(mainCounter);
*/
// 3
/*
function makeCounter1() {
  console.log('Hello');
}
const makeCounter2 = function () {
  console.log('Hello');
};
const makeCounter3 = () => {
  console.log('Hello');
};
const makeCounter4 = function sayHi() {
  console.log('Hello');
};
(() => {
  console.log('Hello');
})();
*/
// 4
/*
structuredClone() - глобальная функция в JavaScript для безопасного и 
эффективного создания глубоких копий сложных объектов и структур данных, 
включая объекты, массивы, Map, Set и другие. Она поддерживает глубокое копирование, 
сохраняет ссылки, но не может скопировать определенные типы данных, 
такие как функции и регулярные выражения.
*/
// 5
/*
const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' };
const obj2 = { here: { is: 'on', other: '3' }, object: 'Y' };
const deepEqual = (obj1, obj2) => {
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  const objectKeys1 = Object.keys(obj1);
  const objectKeys2 = Object.keys(obj2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }

  for (let key of objectKeys1) {
    if (!objectKeys2.includes(key)) {
      return false;
    }
  }

  for (let key of objectKeys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};
*/
// 6
/*
function reverseStr(str) {
  return str.split('').reverse().join('');
}
*/
