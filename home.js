//1- Створити функцію конструктор для обєктів User з полями id, name, surname , email, phone
console.log('_____________1___________');

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'Mary', 'Mis', 'mariamis794@gmail.com', '+380960237224');
console.log(user1);
let user2 = new User(2, 'Roman', 'Mis', 'romashka94@gmail.com', '+3809604466224');
console.log(user2);

// 2---створити пустий масив, наповнити його 10 обєктами new User(....)
console.log('_____________2___________');
let users = [
    new User(5, 'Mary', 'Mis', 'Mariais794@gmail.com', '+380960237224'),
    new User(9, 'Ivan', 'Mis', 'Ivanmis794@gmail.com', '+380960237224'),
    new User(7, 'Vasya', 'Mis', 'Vasya@gmail.com', '+380960237224'),
    new User(1, 'Oksana', 'Mis', 'moksana94@gmail.com', '+380960237224'),
    new User(6, 'Ira', 'Mis', 'iras794@gmail.com', '+380960237224'),
    new User(8, 'anna', 'Mis', 'anna794@gmail.com', '+380960237224'),
    new User(2, 'Vasilina', 'Mis', 'vasilina794@gmail.com', '+380960237224'),
    new User(10, 'Martin', 'Mis', 'martin794@gmail.com', '+380960237224'),
    new User(4, 'Marchuk', 'Mis', 'marchuk794@gmail.com', '+380960237224'),
    new User(3, 'Marko', 'Mis', 'marko794@gmail.com', '+380960237224'),
];
console.log('_____________3___________');

// 3- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

console.log('_____________4___________');
//4 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

console.log('_____________5___________');
// 5- створити класс для обєктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
console.log('_____________6__________');
//6- створити пустий масив, наповнити його 10 обєктами Client
let clients = [
        new Client(1, 'mary', 'mas@56.gmail.com', '+12345233', ['tea', 'banana']),
        new Client(2, 'mary', 'mas@56.gmail.com', '+12345233', ['tea']),
        new Client(3, 'mary', 'mas@56.gmail.com', '+12345233', ['tea', 'banana','orange']),
        new Client(4, 'mary', 'mas@56.gmail.com', '+12345233', ['tea', 'banana','sugar','coffee']),
        new Client(5, 'mary', 'mas@56.gmail.com', '+12345233', ['tea', 'banana','lemon']),
        new Client(6, 'mary', 'mas@523.gmail.com', '+12345233', ['tea', 'banana']),
        new Client(7, 'mary', 'mas@56.gmail.com', '+12345233', ['tea', 'banana','pen']),
        new Client(8, 'mary', 'mas@564.gmail.com', '+12345233', ['tea', 'banana','pizza','pen']),
        new Client(9, 'mary', 'mas@56.gmail.com', '+12345233', ['tea', 'banana']),
        new Client(10, 'mary', 'mas@56.gmail.com', '+12345233', ['tea'])
    ];
console.log('_____________7___________');
// 7- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = clients.sort((a,b) => a.order.length - b.order.length);
console.log(sortedClients);