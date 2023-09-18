function calculateStackSize() {

  let i = 0;
  
  // Считаем сколько раз выполнилась функция
  const func1 = () => {
    i++;
    func1();
  };

  try {
    func1();
  } catch (e) {
      //Ловим ошибку и выводим значение
    console.log(i);
  }
// Добавляем в функцию 4 переменных и считаем снова
  let j = 0;
  const func2 = () => {
    let a = j + 1;
    let b = a + 1;
    let c = b + 1;
    let d = c + 1;
    let e = d + 1;
    j++;
    func2();
  };

  try {
    func2();
  } catch (e) {
      //Ловим ошибку и выводим новое значение
    console.log(j);
  }

// После переменных стек уменьшился
// Таким образом, стек равен - X = N + K * S

// У нас есть две переменных. Первая "Execution Context - контекст вызова функции", назовем её N
// А вторая переменная - это сумма всех размеров переменных внутри функции, назовем её K
// Числа в JavaScript представлены 64 битными, что = 8 байтам - S = 8 
// Неизвестный размер коллстэка обозначим X 

  let N = (40 * i) / (i - j);

  let X = (N * j);
  return Math.round(X) / 1000000 + ' Мегабайта';

}

console.log(calculateStackSize());

// Результаты 
// Chrome - 1.004629 Мегабайт
// Opera - 1.003069 Мегабайт
// Firefox - 2.312085 Мегабайт