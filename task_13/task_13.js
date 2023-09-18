
// Создаем класс Shape, потом подклассы для различных фигур и считаем площади


class Shape {
    getArea() {
        return 0; // Возвращаем площадь равную 0 по умолчанию
    }
    getPerimeter() {
        return 0; // Возвращаем периметр равный 0 по умолчанию
    }
}

// Определяем класс Rectangle, который наследуется от Shape
class Rectangle extends Shape {
    constructor(height, width) {
        super(); // Вызываем конструктор родительского класса
        this.height = height; // Задаем высоту прямоугольника
        this.width = width; // Задаем ширину прямоугольника
    }

    getArea() {
        return this.height * this.width; // Вычисляем площадь прямоугольника
    }

    getPerimeter() {
        return 2 * (this.height + this.width); // Вычисляем периметр прямоугольника
    }
}

// Определяем класс Circle, который наследуется от Shape
class Circle extends Shape {
    constructor(radius) {
        super(); // Вызываем конструктор родительского класса
        this.radius = radius; // Задаем радиус окружности
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2); // Вычисляем площадь окружности
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius; // Вычисляем периметр окружности
    }
}

// Определяем класс Triangle, который наследуется от Shape
class Triangle extends Shape {
    constructor(base, height) {
        super(); // Вызываем конструктор родительского класса
        this.base = base; // Задаем основание треугольника
        this.height = height; // Задаем высоту треугольника
    }

    getArea() {
        return 0.5 * this.base * this.height; // Вычисляем площадь треугольника
    }

    getPerimeter() {
        // Для простоты предположим, что это равнобедренный треугольник
        return 2 * Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.base / 2, 2)) + this.base; // Вычисляем периметр треугольника
    }
}

// Пример использования:

// Создаем прямоугольник с высотой 5 и шириной 10
let rect = new Rectangle(5, 10);
console.log(rect.getArea());  // Выводит: 50
console.log(rect.getPerimeter());  // Выводит: 30

// Создаем окружность с радиусом 5
let circle = new Circle(5);
console.log(circle.getArea());  // Выводит: 78.53981633974483
console.log(circle.getPerimeter());  // Выводит: 31.41592653589793

// Создаем треугольник с основанием 5 и высотой 10
let triangle = new Triangle(5, 10);
console.log(triangle.getArea());  // Выводит: 25
console.log(triangle.getPerimeter());  // Выводит: 22.360679774997898
