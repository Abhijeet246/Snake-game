//constants and variable
let direction = {x:0, y:0};
const foodSound = new Audio();
const gameOverSound = new Audio();
const moveSound = new Audio();
const muicSound = new Audio();
const snakeArr = [
    {x:18, y:15}
]
food = {x:6, y:7};


//game funtions
function main(ctime){
    window.requestAnimationFrame(main); 
    console.log(ctime)
    if(((ctime - lastPaintTime)/1000 < 1/speed)){
        return;
    }
    lastPaintTime = ctime;
    function isCollide(sarr)
    {
        //bumping into self
        for (let index = 1; index <= snakeArr.length; index++) {
            if(snakeArr[i].x === snake[0].x && snake[i].y === snake[0].y){
                return true;
            }
            if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0)
            {

            }
            
        }
    }
    function gameEngine(){
        //updating snake variable and food variable
        if(isCollide(snakeArr))
        {
            gameOverSound.play();
            musicSound.pause();
            inputDir = {x:0, y:0};
            alert("game over press any key to start the game again");
            snakeArr = [{x:13, y:15}];
            musicSound.play();
            score = 0;
        }
        //when food eaten
        if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
            snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
            let a = 2;

            
            let b = 16;
            food = {x:  Math.round(a + (b-a)* Math.random())}
        }
        //moving the snake
        for (let index = snakeArr.length() - 2; index < 0; index++) {
            const element = array[index];
            snakeArr[i+1] = {...snakeArr[index]};            
        }
        snakeArr[0].x = inputDir.x;
        snakeArr[0].y = inputDir.y;
        //render the snake and food
        BeforeUnloadEvent.innerHTML = "";
        snakeArr.forEach((e,index) => {
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            snakeElement.classList.add('head');
            if(index === 0)
            {
                snakeElement.classList.add('head');
            }
            else{


            }
            board.appendChild(snakeElement);
        });
        foodelement = document.createElement('div');
            foodelement.style.gridRowStart = e.y;
            foodelement.style.gridColumnStart = e.x;
            foodelement.classList.add('food');
            board.appendChild(foodelement);
    }
}





//main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir = {x:0, y:1}
    moveSound.play();
    switch(e.key)
    {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        case "Arrowleft":
            console.log("Arrowleft");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        default:
            break;
    }

});