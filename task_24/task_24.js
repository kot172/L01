

// Переменная для хранения всех данных
let allData = []; 
// Переменная для хранения текущей страницы
let currentPage = 1;
// Переменная для хранения количества элементов на странице
const itemsPerPage = 50;

// Функция для сортировки таблицы
function sortTable(columnIndex) {
   // Получаем таблицу и первую строку заголовков
  const table = document.getElementById('data-table');
  const headerRow = table.getElementsByTagName('tr')[0];
  const headerCells = Array.from(headerRow.getElementsByTagName('th'));

  // Сортируем данные по выбранному столбцу
  allData.sort((a, b) => {
    // Получаем значение ячейки из первой строки таблицы
    const cellA = a[headerCells[columnIndex].getAttribute('data-key')];
    // Получаем значение ячейки из второй строки таблицы
    const cellB = b[headerCells[columnIndex].getAttribute('data-key')];
    const sortDirection = headerCells[columnIndex].getAttribute('data-sort-direction');

     // Если столбец содержит числовые значения, то сортируем по числовому значению
    if (headerCells[columnIndex].getAttribute('data-key') === 'zip') {
      return sortDirection === 'asc'? parseInt(cellA) - parseInt(cellB) : parseInt(cellB) - parseInt(cellA);
    } else {
      // Если столбец содержит строковые значения, то сортируем по лексикографическому порядку
      return sortDirection === 'asc'? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    }
  });

  // Обновляем таблицу с учетом сортировки
  renderTable(getPageData(allData, currentPage, itemsPerPage));
  // Обновляем пагинацию с учетом сортировки
  renderPagination(allData);
// Изменяем направление сортировки для выбранного столбца
  toggleSortDirection(columnIndex);
}



// Функция для смены направления сортировки
function toggleSortDirection(columnIndex) {
  // Получаем таблицу и первую строку заголовка таблицы
  const table = document.getElementById('data-table');
  const headerRow = table.getElementsByTagName('tr')[0];
  // Получаем все ячейки заголовка таблицы в массиве
  const headerCells = Array.from(headerRow.getElementsByTagName('th'));

  // Проходимся по всем ячейкам заголовка таблицы
  headerCells.forEach((cell, index) => {
    // Если индекс текущей ячейки соответствует индексу столбца, то меняем его направление сортировки
    if (index === columnIndex) {
      const currentSortDirection = cell.getAttribute('data-sort-direction');
      const newSortDirection = currentSortDirection === 'asc'? 'desc' : 'asc';
      cell.setAttribute('data-sort-direction', newSortDirection);
      // Добавляем или удаляем классы для изменения внешнего вида ячейки
      cell.classList.toggle('asc', newSortDirection === 'asc');
      cell.classList.toggle('desc', newSortDirection === 'desc');
    } else {
      // Если индекс текущей ячейки не соответствует индексу столбца, то удаляем атрибут data-sort-direction и классы asc или desc
      cell.removeAttribute('data-sort-direction');
      cell.classList.remove('asc', 'desc');
    }
  });
}


// Функция для загрузки данных из источника
function loadData() {
  // Отправляем запрос на API для получения данных
  fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true')
   .then(response => response.json()) // Преобразуем ответ в формат JSON
   .then(data => {
    // Сохраняем все данные
      allData = data; 
      // Вызываем функцию для отображения таблицы
      renderTable(getPageData(allData, currentPage, itemsPerPage)); 
      // Вызываем функцию для отображения пагинации
      renderPagination(allData); 
    })
    // Обрабатываем ошибки
   .catch(error => console.error('Ошибка:', error)); 
}


// Функция для отрисовки таблицы
function renderTable(data) {
  // Получаем элемент тела таблицы
  const tableBody = document.getElementById('data-body');
  // Очищаем тело таблицы
  tableBody.innerHTML = '';

  // Проходимся по каждому элементу массива данных
  data.forEach(item => {
    // Создаем новую строку таблицы
    const row = document.createElement('tr');
    // Добавляем в строку таблицы данные из объекта
    row.innerHTML = `
      <td>${item.fname}</td>
      <td>${item.lname}</td>
      <td>${item.tel}</td>
      <td>${item.address}</td>
      <td>${item.city}</td>
      <td>${item.state}</td>
      <td>${item.zip}</td>
    `;
    // Добавляем строку таблицы в тело таблицы
    tableBody.appendChild(row);
  });
}


// Функция для отрисовки пагинации
function renderPagination(data) {
   // Получаем элемент пагинации
  const pagination = document.getElementById('pagination');
  // Очищаем содержимое
  pagination.innerHTML = '';
// Вычисляем общее количество страниц
  const totalPages = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    // Создаем условия
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
// Добавляем слушатель 
    pageLink.addEventListener('click', () => {
      currentPage = i;
       // Отрисовываем таблицу с данными для текущей страницы
      renderTable(getPageData(allData, currentPage, itemsPerPage));
    });

    pagination.appendChild(pageLink);
  }
}

// Функция для получения данных для текущей страницы
function getPageData(data, currentPage, itemsPerPage) {
  // Вычисляем индекс начала данных для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Вычисляем индекс конца данных для текущей страницы
  const endIndex = startIndex + itemsPerPage;
  // Возвращаем обработчик события для текущей страницы
  return data.slice(startIndex, endIndex);
}

// Загрузка данных при загрузке страницы
window.addEventListener('load', loadData);
