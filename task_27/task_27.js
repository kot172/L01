// Функция для добавления анимации элементу
const animateElement = () => {
  // Находим наш елемент
    const element = document.getElementById('animated-element');
  
    // Изменяем положение элемента
    element.style.transform = 'translate(200px, 200px)';
  
    // Изменяем размер элемента
    element.style.width = '200px';
    element.style.height = '200px';
  };
  
  // Вызываем функцию для добавления анимации после загрузки страницы
  window.onload = animateElement;
  