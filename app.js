// 1
/* Массивы в JS являются универсальными (неправильными), так как могут совмещать в себе несколько структур данных.
Так происходит, потому что массивы представляют собой объектоы с особым поведением, которое позволяет использовать их
для  различных целей.
Некоторые из них:
- Индексированный список: Основное назначение массивов в JavaScript - это хранение упорядоченного списка элементов.
Эти элементы могут быть любого типа данных, и к ним можно обращаться по индексу.
- Стек: Массивы могут использоваться как стеки, где элементы добавляются и удаляются с одного конца. Методы push() и pop() 
могут использоваться для добавления и удаления элементов с конца массива. 
- Очередь: Массивы также могут использоваться как очереди, где элементы добавляются в конец массива и удаляются из начала. 
Методы push() и shift() могут использоваться для этого.
- Ассоциативные массивы: В JavaScript массивы также могут быть использованы как ассоциативные массивы (также известные как словари или хэши), 
где значения доступны по строковым ключам, а не только по числовым индексам.
- Динамическое изменение размера: Массивы в JavaScript могут динамически изменять свой размер, поэтому они могут расширяться или уменьшаться 
по мере необходимости без явного объявления размера.
*/

// 2
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };
const testBind = logger.bind(obj);
testBind();
logger.call(obj);
logger.apply(obj);

// 3.1
const getArrayNumber = () => {
  newArray = [];
  for (let i = 0; i < 100; i++) {
    let randomValue = Math.floor(Math.random() * 100 + 1);
    newArray.push(randomValue);
  }
  return newArray;
};
const arrNumber = getArrayNumber();
const sumArray = arrNumber.reduce((acc, value) => acc + value);
const minValue = arrNumber.reduce((acc, value) => (acc > value ? value : acc));
const maxValue = arrNumber.reduce((acc, value) => (acc > value ? acc : value));

const arrString = ['Hello', ' wolrd ', '!'];
const joinStringArray = arrString.reduce((acc, value) => acc.concat(value));

// 3.2
class Stack {
  constructor() {
    this.arr = [];
  }
  // Определение на пустоту
  isEmpty() {
    return !Boolean(this.arr.length);
  }
  // Добавление элемента в стэк
  push(value) {
    this.arr.push(value);
  }
  // Удаление и получение последнего элемента стэка
  pop() {
    if (this.isEmpty()) {
      return 'Out of range';
    }
    return this.arr.pop();
  }
  // Получение последнего элемента без удаления
  peek() {
    if (this.isEmpty()) {
      return 'Out of range';
    }
    return this.arr[this.arr.length - 1];
  }
  // Получение длины стэка
  size() {
    return this.arr.length;
  }
  // Очищение стэка
  clear() {
    this.arr = [];
  }
  // Вывод стэка
  print() {
    console.log(this.arr.toString());
  }
}
const stack = new Stack();

// 3.3
class Queue {
  constructor() {
    this.arr = [];
  }
  // Определение на пустоту
  isEmpty() {
    return this.arr.length === 0;
  }
  // Добавление элемента в очередь
  push(value) {
    this.arr.push(value);
  }
  // Удаление первого элемента очереди
  pop() {
    return this.arr.shift();
  }
  // Получение первого элемента без удаления
  front() {
    return this.arr[0];
  }
  // Получение последнего элемента без удаления
  back() {
    return this.arr[this.arr.length - 1];
  }
  // Получение длины очереди
  size() {
    return this.arr.length;
  }
  // Вывод очереди
  print() {
    console.log(this.arr.toString());
  }
}
const queue = new Queue();

// Bonus task
Function.prototype.bind = function (context) {
  let fn = this; // Исходная функция
  let args = Array.prototype.slice.call(arguments, 1); // Аргументы, переданные в bind, начиная со второго

  // Возвращаем функцию, которая вызывает исходную функцию fn с заданным контекстом и аргументами
  return function () {
    let bindArgs = Array.prototype.slice.call(arguments); // Аргументы, переданные при вызове
    return fn.apply(context, args.concat(bindArgs)); // Объединяем аргументы из bind и вызова
  };
};

function sayHi() {
  console.log(`Hello ${this.name}`);
}

const obj1 = { name: 'Viktor' };
const obj2 = { name: 'Maria' };

const test1 = sayHi.bind(obj1)
test1();
const test2 = sayHi.bind(obj2)
test2();
