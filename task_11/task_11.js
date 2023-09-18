
// Функция, которая возвращает другую функцию и имеет доступ к переменной, определенной во внешней функции


function outerFunction(x) {
    let outerVariable = x; // Создаем переменную outerVariable
    return function innerFunction() { // Возвращаем внутреннюю функцию innerFunction
        return outerVariable; // Возвращаем значение переменной outerVariable
    }
}

let inner = outerFunction(10); // Вызываем функцию outerFunction и сохраняем возвращаемую функцию в переменной inner
console.log(inner());  
