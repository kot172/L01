
const analyzePassword = (password) => {
  // Проверяем длину пароля
  if (password.length < 8) {
    return "Пароль слишком короткий. Рекомендуется использовать не менее 8 символов.";
  }

  // Проверяем наличие различных символов
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  // Подсчитываем количество условий, которые выполняются
  const conditionsMet = [hasLowercase, hasUppercase, hasNumbers, hasSpecialChars].filter(Boolean).length;

  // Оцениваем сложность пароля
  if (conditionsMet === 1) {
    return "Очень слабый пароль. Рекомендуется использовать различные символы, числа и буквы в разных регистрах.";
  } else if (conditionsMet === 2) {
    return "Слабый пароль. Рекомендуется использовать различные символы, числа и буквы в разных регистрах.";
  } else if (conditionsMet === 3) {
    return "Средний пароль. Рекомендуется использовать различные символы, числа и буквы в разных регистрах.";
  } else {
    return "Сильный пароль!";
  }
};
