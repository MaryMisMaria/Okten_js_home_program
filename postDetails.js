const favoritesKey = 'favorites';
let postDetails = document.createElement('div');
const users = JSON.parse(localStorage.getItem(favoritesKey));
///7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
for(let item of users){


}

document.body.appendChild(postDetails);
postDetails.append(idUser,id,title,body);