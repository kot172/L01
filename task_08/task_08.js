

// Функция, которая принимает массив функций и возвращает новую функцию
const executeFunctions = (functions) => (...args) => {
  const results = []; // Массив для хранения результатов
  for (const func of functions) {
    const result = func(...args); // Вызываем каждую функцию с переданными аргументами
    results.push(result); // Добавляем результат в массив
  }
  return results; // Возвращаем массив результатов
};

// Пример функций
const firstFunc = (x) => x + 1;
const secondFunc = (x) => x * 2;
const thirdFunc = (x) => x - 3;

const functions = [firstFunc, secondFunc, thirdFunc]; // Массив функций
const combinedFunction = executeFunctions(functions); // Создаем новую функцию

const results = combinedFunction(5); // Вызываем новую функцию с аргументом 5
console.log(results); // Вывод: [6, 10, 2]
