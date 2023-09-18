
function traverseDOM(element, action) {
    action(element); // Выполняем действие с текущим узлом
  
    element = element.firstElementChild; // Переходим к первому дочернему узлу
  
    while (element) {
      traverseDOM(element, action); // Рекурсивно вызываем функцию для каждого дочернего узла
      element = element.nextElementSibling; // Переходим к следующему соседнему узлу
    }
  }
  
  function logTagInfo(element) {
    console.log(element.tagName); // Выводим информацию о теге в консоль
  }
  
  const rootElement = document.getElementById('root');
  traverseDOM(rootElement, logTagInfo);
  