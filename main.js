//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули index.html
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        for (let item of users) {
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('main');
            let divID = document.createElement('div');
            divID.innerText = `id - ${item.id} `;
            let divName = document.createElement('div');
            divName.innerText = `Name - ${item.name} `;
            let divUsername = document.createElement('div');
            divUsername.innerText = `UserName - ${item.username} `;
            let divEmail = document.createElement('div');
            divEmail.innerText = `Email - ${item.email} `;
            let divAddress = document.createElement('div');

            document.body.appendChild(mainDiv);
            mainDiv.append(divID, divName, divUsername, divEmail, divAddress);
        }

    });