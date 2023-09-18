
// Сортируем по возросту и имени

// Изначальный массив
let arr = [
    { name: 'John', age: 25 },
    { name: 'Annet', age: 23 },
    { name: 'Jeremy', age: 25 },
    { name: 'Kate', age: 30 }
];

// Сортировка массива по возрасту и имени
arr.sort((a, b) => {
    if (a.age === b.age) {
        // Если возраст одинаковый, сортируем по имени с помощью метода localeCompare
        return a.name.localeCompare(b.name);
    }
    // Сортировка по возрасту в порядке возрастания
    return a.age - b.age;
});

console.log(arr);
