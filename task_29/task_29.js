// Функция для обработки отправки формы
const handleSubmit = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы
  
    // Получаем данные из формы
    const form = document.getElementById('myForm');
    const name = form.elements.name.value;
    const number = form.elements.number.value;
  
    // Выполняем определенные действия с данными
    // Например, отправляем данные на сервер или отображаем всплывающее окно с результатами
    alert(`Данные из формы:\nИмя: ${name}\nNumber: ${number}`);
  
    // Очищаем поля формы
    form.reset();
  };
  
  // Получаем форму и добавляем обработчик события отправки формы
  const form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);
  