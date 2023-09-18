
// Функция преобразования JSON в связный список

class ListNode {
    constructor(val, next = null) {
        this.val = val; // Значение
        this.next = next; // Ссылка на следующий 
    }
}


function jsonToLinkedList(jsonStr) {
    let data = JSON.parse(jsonStr); // Преобразование строки JSON в объект JavaScript
    let dummyRoot = new ListNode(0); 
    let ptr = dummyRoot; 
    for (let item of data) { // Итерация по элементам массива данных
        ptr.next = new ListNode(item); // Создание нового узла списка с текущим элементом
        ptr = ptr.next; // Перемещение указателя на следующий узел списка
    }
    return dummyRoot.next; 
}