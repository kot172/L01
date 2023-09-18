
// Конвертация в JSON строку

function jsonToString(obj) {
    let str = '{'; // начинаем строку объекта
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            str += `"${key}":"${obj[key]}",`; // добавляем ключ и значение в виде строки
        } else {
            str += `"${key}":${obj[key]},`; // добавляем ключ и значение без кавычек
        }
    }
    return str.slice(0, -1) + '}'; // удаляем последнюю запятую и закрываем объект
}

let json = {
    name: "Jeremy",
    age: 23,
    city: "Moscow"
};

console.log(jsonToString(json)); // выводим результат в консоль
