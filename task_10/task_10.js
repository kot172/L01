
// Конвертируем строки в Json

function convertToJSON(string) {
  // Создаем регулярное выражение для поиска пар ключ-значение в строке
  const regex = /"([^"]+)":\s*([^,}]+)/g;
  
  // Создаем пустой объект для хранения преобразованных данных
  const jsonData = {};
  
  // Используем метод replace для поиска и замены всех пар ключ-значение в строке
  string.replace(regex, function(match, key, value) {
    // Удаляем лишние пробелы в ключе и значении
    jsonData[key.trim()] = value.trim();
  });
  
  // Возвращаем объект с преобразованными данными
  return jsonData;
}

// Задаем строку с данными в формате JSON
const string = '{"name": "Jeremy", "age": 30, "city": "New York"}';

// Преобразуем строку в объект JSON
const jsonData = convertToJSON(string);

// Выводим объект JSON в консоль
console.log(jsonData);
