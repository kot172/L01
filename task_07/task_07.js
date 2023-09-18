

// Создаем массив функций
let functions = [
    () => console.log("Function 1"),
    () => console.log("Function 2"),
    () => console.log("Function 3"),
    () => console.log("Function 4"),
];

// Функция для выполнения функций последовательно
function executeFunctionsSequentially(functions, index = 0) {
    // Проверяем, достигли ли конца массива функций
    if (index >= functions.length) {
        return; // Если да, то завершаем функцию
    }

    // Вызываем текущую функцию
    functions[index]();

    // Выводим информацию о вызове функции в консоль
    console.log(`Функция  ${index + 1}  была вызвана`);

    // Рекурсивно вызываем функцию для выполнения следующей функции
    executeFunctionsSequentially(functions, index + 1);
}

// Запускаем выполнение функций последовательно
executeFunctionsSequentially(functions);
