// //
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
}).then(posts => {
    for (let element of posts) {
        let postDiv = document.createElement('div');
        postDiv.innerText = `UserID- ${element.userId} ID-  ${element.id} Title- ${element.title} Body -${element.body}`;
        let btn = document.createElement('button');
        btn.innerText = 'Comment';
        postDiv.append(btn);
        btn.classList.add('btn');
        btn.onclick=function (){
            fetch(`https://jsonplaceholder.typicode.com/posts/${element.id}/comments`).then(posts => posts.json())
                .then(posts => {
                    let commentsDiv=document.createElement('div');
                    for(let comment of posts){
                        let commentBody=document.createElement('div');
                        commentsDiv.append(commentBody);
                    }
                })





            //////
        }
        document.body.appendChild(postDiv);
    };
});