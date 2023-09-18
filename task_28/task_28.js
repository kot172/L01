// Функция для создания и добавления элемента с использованием шаблонов
const createAddElement = () => {
    const template = document.getElementById('template');
    const container = document.getElementById('container');
  
    // Клонируем содержимое шаблона
    const clone = document.importNode(template.content, true);
  
    // Добавляем клонированный элемент в контейнер
    container.appendChild(clone);
  };
  
  // Вызываем функцию для создания и добавления элемента после загрузки страницы
  window.onload = createAddElement;
  