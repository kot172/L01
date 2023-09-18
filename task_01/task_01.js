//Проверяем строку на палиндром
//В условиях не было сказано про регистр, но я решил учесть это


// 1 способ
function isPalindrome(string) {
  // Удаляем все пробелы из строки и приводим ее к нижнему регистру
  string = string.replace(/\s/g, "").toLowerCase();

  // Проверяем, является ли строка палиндромом
  if (string === string.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}




// 2 способ
const isPalindrome = (string) => {
  // Удаляем все пробелы из строки и приводим ее к нижнему регистру
  string = string.replace(/\s/g, "").toLowerCase();

  // Создаем пустую строку для хранения перевернутой строки
  let reversedString = '';

  // Используем цикл for для переворачивания строки
  for(let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  // Сравниваем исходную строку с перевернутой
  // Если они совпадают, то строка является палиндромом
  return string === reversedString;
}
