//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
const favoritesKey = 'favorites';
let divUser = document.createElement('div');
const users = JSON.parse(localStorage.getItem(favoritesKey));

for (let item of users) {
    let nameUser = document.createElement('div');
    nameUser.innerText = `Name- ${item.name} Username- ${item.username} Email-${item.email} `;
    let addressUser = document.createElement('div');
    addressUser.innerText = `Street-${item.address.street} Suite-${item.address.suite} city-
     ${item.address.city} zipcode-${item.address.zipcode} Geo- ${item.address.geo.lat} ${item.address.geo.lng}  `;

    let phoneDiv = document.createElement('div');
    phoneDiv.innerText = `phone - ${item.phone}   website- ${item.website}  company- ${item.company.name}  ${item.company.catchPhrase} ${item.company.bs}`

    let btnPost = document.createElement('button');
    btnPost.innerText = 'post of current user';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(posts => {
            btnPost.onclick = function () {
                let titleDiv = document.createElement('div');
                for (item of posts) {
                    titleDiv.innerText = `${item.title}`

                }
                divUser.append(titleDiv);
            }
            for (item of posts) {
                let idUser = document.createElement('div');
                idUser.innerText = `${item.userId}`;
                let id = document.createElement('div');
                id.innerText = `${item.id}`;
                let title = document.createElement('div');
                title.innerText = `${item.title}`;
                let body = document.createElement('div');
                body.innerText = `${item.body}`;
                let btnPostDetails = document.createElement('button');
                btnPostDetails.innerText = 'Details Post';
                btnPostDetails.onclick = function () {
                    const favorites=JSON.parse(localStorage.getItem(favoritesKey));
                    favorites.push(item);
                    localStorage.setItem(favoritesKey,JSON.stringify(favorites));
                    btnPostDetails.disabled;
                    window.location = './postDetails.html';
                }
                divUser.append(idUser, id, title, body, btnPostDetails);
            }

        });
    divUser.append(nameUser, addressUser, phoneDiv, btnPost);

}
document.body.appendChild(divUser);

