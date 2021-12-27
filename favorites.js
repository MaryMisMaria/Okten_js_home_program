const key = 'value';
const usersFavorites = JSON.parse(localStorage.getItem(key));

for(let item of usersFavorites){
    let userFavorites = document.createElement('div');
    let mainElem=document.createElement('div');
    userFavorites.appendChild(mainElem);
    mainElem.innerText = `${item.name}   ${item.age}  ${item.status}`;
    document.body.appendChild(userFavorites);
}
