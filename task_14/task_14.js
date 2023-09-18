
// Функция, которая принимает URL изоброжения и возвращает промис с данными об изображении, когда оно загружено


const loadImage = (url) => {
  // Возвращаем новый Promise, который позволяет обрабатывать асинхронные операции
  return new Promise((resolve, reject) => {
    // Создаем новый объект Image
    const image = new Image();

    // Когда изображение загружено, мы вызываем resolve с объектом, содержащим информацию об изображении
    image.onload = () => {
      resolve({
        width: image.width,
        height: image.height,
        src: url
      });
    };

    // Если при загрузке изображения произошла ошибка, мы вызываем reject с новым объектом Error
    image.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    // Устанавливаем src для нашего объекта Image, начинаем загрузку изображения
    image.src = url;
  });
};

// Пример использования функции
const imageUrl = "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=740&t=st=1694541413~exp=1694542013~hmac=3cfde4069fdfa18a357fb99defebda9b2ff45d8e6186a4ccb612b69ed4f4e8bf";
loadImage(imageUrl)
  // Если изображение успешно загружено, мы выводим информацию об изображении
  .then((imageData) => {
    console.log("Изображение загружено:", imageData);
  })
  // Если при загрузке изображения произошла ошибка, мы выводим сообщение об ошибке
  .catch((error) => {
    console.error("Ошибка загрузки изображения:", error);
  });
