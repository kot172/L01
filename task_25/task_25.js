const createAndStyleElement = (tagName, style) => {
  // Создаем новый элемент
  const element = document.createElement(tagName);
  
  // Применяем стили с помощью CSS
  Object.assign(element.style, style);
  
  // Добавляем элемент в DOM
  document.body.appendChild(element);
  
  return element;
}

// Пример использования функции
window.onload = () => {
  const myElement = createAndStyleElement('div', {
      width: '200px',
      height: '200px',
      backgroundColor: 'red',
      margin: "50px 50px",
  });
};
