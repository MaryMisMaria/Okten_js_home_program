const favoritesKey = 'favorites';
let postDetails = document.createElement('div');
const users = JSON.parse(localStorage.getItem(favoritesKey));
///7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
for (let element of users) {
    let postIDUser = document.createElement('div');
    postIDUser.innerText = `ID - ${element.id}`;
    let titlePost = document.createElement('div');
    titlePost.innerText = ` TITLE- ${element.title}`;
    let bodyPost = document.createElement('div');
    bodyPost.innerText = `${element.body}`;
    postDetails.append(postIDUser, titlePost, bodyPost);
}
document.body.appendChild(postDetails);

    fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
        return response.json();
    }).then(comments => {
        for (let item of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comments');
            let postId = document.createElement('div');
            postId.innerText = `POST ID - ${item.postId}`;
            let idDiv = document.createElement('div');
            idDiv.innerText = `ID - ${item.id}`;
            let nameDiv = document.createElement('div');
            nameDiv.innerText = `Name - ${item.name}`;
            let emailDiv = document.createElement('div');
            emailDiv.innerText = `Email - ${item.email}`;
            let bodyDiv = document.createElement('div');
            bodyDiv.innerText = `Body - ${item.body}`;
            document.body.appendChild(commentDiv);
            commentDiv.append(postId, idDiv, nameDiv, emailDiv, bodyDiv);

        }


    });
