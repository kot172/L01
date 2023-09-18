

// Пример асинхронной функции, которая возвращает промис, который разрешается через 2 секунды
const asyncOperation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Результат асинхронной операции");
    }, 2000);
  });
};

// Асинхронная функция, которая ожидает выполнения asyncOperation
const asyncFunction = async () => {
  console.log("Начало выполнения асинхронной функции");
  
  // Здесь мы используем ключевое слово await для ожидания выполнения asyncOperation
  const result = await asyncOperation();
  
  console.log("Асинхронная операция завершена, результат:", result);
  
  // Возвращаем результат
  return result;
};

// Использование асинхронной функции
asyncFunction()
  .then((result) => {
    console.log("Результат выполнения асинхронной функции:", result);
  })
  .catch((error) => {
    console.error("Произошла ошибка при выполнении асинхронной функции:", error);
  });
