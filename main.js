const arrayFields=document.querySelectorAll('[data-pos]');
const forest=document.querySelector('.forest');
const arena=document.querySelector('.arena');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function startGame(){
    let randomPosition;
    //random first position
    //security from not to choose a special field
    do{
        randomPosition=getRandomInt(0,98);
    } while (arrayFields[randomPosition].classList.contains('board__item-green', 'board__item-red'));
    arrayFields[randomPosition].classList.add(`board__item-black`);
    arrayFields.forEach(item => {
        item.addEventListener('click', handleClick, { once: true })
    })
}

startGame();


function handleClick (e){
    forest.classList.remove('show');
    arena.classList.remove('show');
    const item=e.target;
    arrayFields.forEach(item => {
        item.classList.remove('board__item-black');
        item.classList.add(`board__item`);
    })
    if(item.classList.contains('board__item-green')){
        item.classList.remove('board__item-green');
        forest.classList.add('show');
    }
    else if(item.classList.contains('board__item-red')){
        item.classList.remove('board__item-red');
        arena.classList.add('show');
    }
    item.classList.add(`board__item-black`);
}
