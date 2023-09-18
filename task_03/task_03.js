// Объявляем объект MathX как замыкание
const MathX = (() => {
    // Функция для вычисления N-го числа Фибоначчи
    const fibonacciN = (n) => {
        let [a, b] = [0, 1];
        // Повторяем N раз
        for (let i = 0; i < n; i++) {
            // Обновляем значения a и b
            [a, b] = [b, a + b];
        }
        // Возвращаем N-е число Фибоначчи
        return a;
    }

    // Функция для вычисления всех чисел Фибоначчи до N
    const fibonacciSequence = (n) => {
        let sequence = [];
        let [a, b] = [0, 1];
        // Пока a меньше N
        while (a < n) {
            // Добавляем a в последовательность
            sequence.push(a);
            // Обновляем значения a и b
            [a, b] = [b, a + b];
        }
        // Возвращаем последовательность чисел Фибоначчи
        return sequence;
    }

    // Вспомогательная функция для проверки, является ли число простым
    const isPrime = (n) => {
        for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
            // Если n делится на i без остатка, то n не является простым числом
            if (n % i === 0) {
                return false;
            }
        }
        // Если n больше 1 и не было найдено делителей, то n является простым числом
        return n > 1;
    }

    // Функция для вычисления всех простых чисел до N
    const primes = (n) => {
        let primes = [];
        for (let i = 2; i <= n; i++) {
            // Если i является простым числом, добавляем его в список
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        // Возвращаем список простых чисел
        return primes;
    }

    
    return {
        fibonacciN,
        fibonacciSequence,
        primes
    }
})();
