

// создаем книгу и методы для получения и изменения свойств

let book = {
    title: 'Название книги', // Заголовок книги
    author: 'Автор', // Автор книги
    year: 'Год издания', // Год издания книги
    
    // Методы для получения значений
    getTitle: function() {
        return this.title; // Возвращает заголовок книги
    },
    getAuthor: function() {
        return this.author; // Возвращает автора книги
    },
    getYear: function() {
        return this.year; // Возвращает год издания книги
    },
    
    // Методы для установки новых значений
    setTitle: function(newTitle) {
        this.title = newTitle; // Устанавливает новый заголовок книги
    },
    setAuthor: function(newAuthor) {
        this.author = newAuthor; // Устанавливает нового автора книги
    },
    setYear: function(newYear) {
        this.year = newYear; // Устанавливает новый год издания книги
    }
}

// Пример использования:
console.log(book.getTitle());  // Выводит: 'Название книги'
book.setTitle('Новое название');
console.log(book.getTitle());  // Выводит: 'Новое название'
