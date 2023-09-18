
// Считаем localStorage браузера


const calculateLocalStorageSize = () => {
  let testData = '';
  let dataSize = 0;
  try {
    // Создаем строку данных размером 1 МБ
    testData = 'a'.repeat(1024 * 1024);
    // Пытаемся записать данные в localStorage до тех пор, пока не будет выброшено исключение
    while (true) {
      dataSize += testData.length;
      localStorage.setItem('testData', testData);
    }
  } catch (error) {
    // Обрабатываем исключение и выводим размер данных, которые удалось записать
    console.log(`Максимальный объем данных в localStorage: ${dataSize / (1024 * 1024)} МБ`);
    localStorage.removeItem('testData');
  }
};

calculateLocalStorageSize();


