// 1
/*
Сортировка пузырьком (Bubble Sort): 
Этот алгоритм проходит по списку множество раз. На каждом проходе соседние 
элементы сравниваются и меняются местами, если они находятся в неправильном порядке.

Сортировка вставками (Insertion Sort): 
Алгоритм сортировки, который постепенно строит отсортированный список. 
На каждом шаге один элемент добавляется в отсортированную часть массива.

Сортировка выбором (Selection Sort): 
Этот алгоритм разделяет массив на две части: отсортированную и неотсортированную. 
На каждом шаге он выбирает минимальный элемент из неотсортированной части и помещает его в конец отсортированной части.

Сортировка слиянием (Merge Sort): 
Рекурсивный алгоритм, который разделяет список пополам, сортирует каждую половину, а затем объединяет их вместе.

Быстрая сортировка (Quick Sort): 
Еще один рекурсивный алгоритм, который выбирает опорный элемент и разделяет массив на две части: 
элементы, меньшие опорного, и элементы, большие опорного. Затем он рекурсивно сортирует обе части.

Сортировка счетчиком (Counting Sort): 
Эффективный алгоритм для сортировки целых чисел в заданном диапазоне. 
Он подсчитывает количество элементов каждого значения и затем использует эту информацию для правильной упорядоченности.

Пирамидальная сортировка (Heap Sort): 
Алгоритм, который преобразует массив в двоичное куча, а затем постепенно извлекает наибольшие элементы из кучи и перестраивает ее.
*/

//3
// Первый способ создания объекта
/*
const Person = {
  name: 'Viktor',
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  setNewName(name) {
    this.name = name;
  },
}; */
// Второй способ создания объекта
/*
const Person = Object.create(
  {},
  {
    name: { value: 'Viktor' },
    sayHi: {
      value: function () {
        console.log(`Hello ${this.name}`);
      },
    },
    setNewName: {
      value: function (name) {
        this.name = name;
      },
    },
  }
);
*/
// Третий способ создания объекта
const Person = Object.assign(
  {},
  {
    name: 'Viktor',
    sayHi() {
      console.log(`Hello ${this.name}`);
    },
    setNewName(name) {
      this.name = name;
    },
  }
);
const Person2 = Object.assign({}, Person);
Person2.setNewName('Maria');
Person2.sayHi();
Object.defineProperty(Object.prototype, 'logInfo', {
  value: function () {
    console.log(`Logging info ${this.name}`);
  },
});
Person2.logInfo();
Person.logInfo();

// 4
class PersonTree {
  constructor(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}
const personTree = new PersonTree('Viktor');
console.log(personTree.getName);
personTree.setName = 'Vitaliy';

class PersonTree2 extends PersonTree {}
const personTree2 = new PersonTree2('Maria');
console.log(personTree2.getName);
personTree2.setName = 'Daria';
console.log(personTree2.getName);

// Bonus Task
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

// Сложность алгоритма O(n), если элементы уже отсортированны, если же нет, то O(nlog(n))
const firstSum = (arr, total) => {
  //arr = arr.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex !== rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];
    if (sum === total) {
      return [arr[leftIndex], arr[rightIndex]];
    }
    if (sum > total) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return false;
};
console.log(firstSum(arr, total));
