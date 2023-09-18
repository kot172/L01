
//Поле ввода адреса с функцией геокодинга 

// Это функция debounce, которая задерживает выполнение функции до тех пор,
// пока не пройдет определенное количество миллисекунд после последнего ее вызова.
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Функция для получения геокодированных данных
async function getGeocodedData(input) {
    // Ключ API
    const apiKey = '47b4326f-36ae-4b8f-8957-dd359c16d421';
    // Отправляем запрос на сервер
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${input}`);
    
    // Проверяем статус ответа
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        // Преобразуем ответ в JSON формат
        const data = await response.json();
        // Возвращаем данные
        return data.response.GeoObjectCollection.featureMember;
    }
}

// Функция для обновления выпадающего списка
function updateDropdown(data) {
    // Получаем элемент выпадающего списка
    const dropdown = document.getElementById('dropdown');
    // Очищаем список
    dropdown.innerHTML = '';
    // Добавляем новые элементы в список
    data.forEach(item => {
        const option = document.createElement('option');
        option.innerHTML = item.GeoObject.name;
        dropdown.appendChild(option);
    });
}

// Обработчик событий для поля ввода
const input = document.getElementById('input');
// Добавляем обработчик события 'input' с задержкой в 500 мс
input.addEventListener('input', debounce(async () => {
    // Получаем геокодированные данные
    const data = await getGeocodedData(input.value);
    // Обновляем выпадающий список
    updateDropdown(data);
}, 500));
