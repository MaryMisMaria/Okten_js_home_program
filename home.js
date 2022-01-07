//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ обєкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//     return response.json();
// }).then(posts => {
//     let mainDiv = document.createElement('div');
// mainDiv.classList.add('main');
//     for (let element of posts) {
//         let divPost = document.createElement('div');
//         divPost.classList.add('post');
//         let divId=document.createElement('div');
//         divId.innerText=`${element.id}`;
//         let divTitle=document.createElement('div');
//         divTitle.innerText=`${element.title}`;
//         let divBody=document.createElement('div');
//         divBody.innerText=`${element.body}`;
//        document.body.appendChild(mainDiv);
//         mainDiv.appendChild(divPost);
//         divPost.append(divId,divTitle,divBody);
//     }
//
// });

//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
    return response.json();
}).then(comments => {
    let mainComment = document.createElement('div');

    for (let element of comments) {
        let commentDiv=document.createElement('div');
        commentDiv.classList.add('comment');
        let commentPostId = document.createElement('div');
        commentPostId.innerText = `PostId - ${element.postId}`
        document.body.appendChild(mainComment);
        let commentId = document.createElement('div');
        commentId.innerText = `Id- ${element.id}`
        let commentName = document.createElement('div');
        commentName.innerText = `Name- ${element.name}`;
        let commentEmail = document.createElement('div');
        commentEmail.innerText = `Email - ${element.email}`;
        let commentBody = document.createElement('div');
        commentBody.innerText = `Body - ${element.body}`;
        mainComment.append(commentDiv);
        commentDiv.append(commentPostId, commentId, commentName, commentEmail, commentBody);
    }
});