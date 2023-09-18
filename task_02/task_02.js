// Функция, которая которая возвращает 'true' если число странное,
// и 'false' если нет, или если это не число

function isStrangeNumber(number) {
    // Проверяем, является ли входное значение числом
    if (typeof number !== 'number') {
      return false;
    }
    
    let sum = 0;
    
    // Находим все делители числа и суммируем их
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    
    // Проверяем, является ли сумма делителей равной числу
    if (sum === number) {
      return true;
    } else {
      return false;
    }
  }
  