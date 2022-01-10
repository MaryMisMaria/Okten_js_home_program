//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули index.html
const favoritesKey='favorites';
localStorage.setItem(favoritesKey,JSON.stringify([]));
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        for (let item of users) {
            let mainDiv = document.createElement('div');
            let contentDiv=document.createElement('div');
            contentDiv.classList.add('content');
            mainDiv.classList.add('main');
            let divID = document.createElement('div');
            divID.innerText = `id - ${item.id} `;
            let divName = document.createElement('div');
            divName.innerText = `Name - ${item.name} `;
            let btn = document.createElement('button');
            btn.innerText = 'Details about users';
            btn.onclick = function () {
                const favorites=JSON.parse(localStorage.getItem(favoritesKey));
                favorites.push(item);
                localStorage.setItem(favoritesKey,JSON.stringify(favorites));
                btn.disabled;
                window.location = './user_details.html';
            }
            document.body.appendChild(contentDiv);

            contentDiv.appendChild(mainDiv);
            mainDiv.append(divID, divName, btn);
        }

    });