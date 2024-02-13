// 1
/*
Порядок будет следующим:
promiseTwo - промис, с resolve = а, 
далее с помощью then, resolve = ab,
далее resolve = abc, finally - ничего не принимает и
ничего не возвращает, catch пропуститься, и на последнем
then получим abc
*/
/*
let promiseTwo = new Promise((resolve, reject) => {
  resolve('a');
});

promiseTwo
  .then((res) => {
    return res + 'b';
  })
  .then((res) => {
    return res + 'с';
  })
  .finally((res) => {
    return res + '!!!!!!!';
  })
  .catch((res) => {
    return res + 'd';
  })
  .then((res) => {
    console.log(res);
  });
*/
// 2
/*
Первый вывод, 1 123, так как doSmth() возвращает промис
с resolve(123). Второй вывод 2 123, по тому же принципу + возвращает 
промис с reject(321), в блоке catch обрабатывается ошибка и выдаст
3 321. Последний then вернет 4 undefined, так как блок catch ничего не вернул.
*/
/*
function doSmth() {
  return Promise.resolve('123');
}

doSmth()
  .then(function (a) {
    console.log('1', a); //
    return a;
  })
  .then(function (b) {
    console.log('2', b);
    return Promise.reject('321');
  })
  .catch(function (err) {
    console.log('3', err);
  })
  .then(function (c) {
    console.log('4', c);
    return c;
  });
*/
// 3
/*
const arr = [10, 12, 15, 21];
let index = 0;
const intervalId = setInterval(() => {
  if (index < arr.length) {
    console.log(arr[index]);
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 3000);
*/
// Bonus task
const fetchUrl = (url, steps = 5) => {
  return new Promise((resolve, reject) => {
    const fetchPage = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error');
        }
        resolve('Success');
      } catch (error) {
        if (steps === 0) {
          reject(error);
        } else {
          console.log(`Step: ${steps}`);
          steps--;
          setTimeout(fetchPage, 1000);
        }
      }
    };
    fetchPage();
  });
};

fetchUrl('https://google/com&#39')
  .then((res) => {
    console.log(content);
  })
  .catch((error) => {
    console.error(error);
  });
