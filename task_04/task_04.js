
// Функция изменяющее окончание слова

function pluralize(number, word) {
    let ending = '';
    if (number % 10 === 1 && number % 100 !== 11) {
        ending = '';
    } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
        ending = 'а';
    } else {
        ending = 'ов';
    }
  
    // Для слов, оканчивающихся на "ель" или "ие"
    if (word.endsWith('ель')) {
        if (number % 10 === 1 && number % 100 !== 11) {
            ending = 'ь';
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            ending = 'я';
        } else {
            ending = 'ей';
        }
        word = word.slice(0, -1);
    } else if (word.endsWith('ие')) {
        if (number % 10 === 1 && number % 100 !== 11) {
            ending = 'е';
        } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
            ending = 'я';
        } else {
            ending = 'й';
        }
        word = word.slice(0, -1);
    }
  
    return `${number} ${word}${ending}`;
  }
  
  // Пример использования
  console.log(pluralize(123, 'пользователь')); // 123 пользователя
  console.log(pluralize(21, 'сообщение')); // 21 сообщение

  console.log(pluralize(17, 'пример')); // 17 примеров
  