const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const overlay = document.querySelector('.overlay');
const win = document.querySelector('.win');
const show = document.querySelector('.show');
const diff = document.querySelector('.diff');
const scoreInfo = document.querySelector('.score');
const msg = document.querySelector('.message');
const userGuess = document.querySelector('.guess');
const btn=document.querySelector('.check');
const user = document.querySelector('.user');
const vs = document.querySelector('.vs');
const bdy = document.querySelector('body');
const range  = document.querySelector('.range');
const btnag = document.querySelector('.again');
const numb = document.querySelector('.number');
const highScore = document.querySelector('.highscore')
const showScore = document.querySelector('.showscore')
overlay.classList.remove('hidden');
btn1.addEventListener('click',()=>{
    diff.classList.add('hidden');
    overlay.classList.add('hidden');
    //initialization
    let score = 10;
    let highscore = 0;
    let number = Math.trunc(Math.random()*20+1);
    console.log(number);
    scoreInfo.textContent = score
    const displayMsg = (message) =>{
        msg.textContent = message;
    };
    const winCheck = () => {
        const guess = Number(userGuess.value);
        user.textContent = guess;
        
        
        
        if (!guess){
            displayMsg('input a number');
        }else if (guess === number){
            win.classList.remove('hidden');
            displayMsg('You Won');
            document.querySelector('.number').textContent = number;
            vs.textContent ='=';
            bdy.style.background = 'url(./img/celeb.gif)';
            
            overlay.classList.remove('hidden');
            document.querySelector(
                '.showScore',
            ).textContent = `Your Score = ${score}`;
            overlay.addEventListener('click', function () {
                overlay.classList.add('hidden');
            });

            user.style.background='red'
            user.style.color='white'
            vs.style.background='blue'
            vs.style.color='red'
            numb.style.background='green'
            numb.style.color='white'
            userGuess.style.background='yellow'
            userGuess.style.color='blue'
        if (score > highscore){
            highscore=score
            highScore.textContent = highscore;
        }
        }else if (guess !== number && guess <= 20 && guess >= 0){
            if (score > 1){
                displayMsg(guess < number ? 'Too Low': 'Too High');
                score--;
                scoreInfo.textContent=score;
            }else {
                displayMsg('you loose');
            }
            
        }
        else {
            displayMsg('Out of Range');
            show.classList.remove('hide');
            range.textContent= 'Out of Range'
        }
        btnag.addEventListener('click',()=>{
            number = Math.trunc(Math.random()*20+1);
            score = 10;
            console.log(number);
            document.querySelector('.number').textContent = '?';
            user.textContent = '!';
            vs.textContent = '≠';
            bdy.style.background = 'black';
            user.style.background='white'
            user.style.color='black'
            vs.style.background='grey'
            vs.style.color='white'
            numb.style.background='white'
            numb.style.color='black'
        userGuess.style.background='black'
        userGuess.style.color='white'
            displayMsg ('Start guessing')
        })
    };
    btn.addEventListener('click', winCheck);

});


btn2.addEventListener('click',()=>{
    diff.classList.add('hidden');
    overlay.classList.add('hidden');
     //initialization
let score = 7;
let highscore = 0;
let number = Math.trunc(Math.random()*20+1);
console.log(number);
scoreInfo.textContent = score
scoreInfo.textContent = score
    const displayMsg = (message) =>{
        msg.textContent = message;
    };
    const winCheck = () => {
        const guess = Number(userGuess.value);
        user.textContent = guess;
        
        if (!guess){
            displayMsg('input a number');
        }else if (guess === number){
            win.classList.remove('hidden');
            displayMsg('You Won');
            document.querySelector('.number').textContent = number;
            vs.textContent ='=';
            bdy.style.background = 'url(./img/celeb.gif)';

            overlay.classList.remove('hidden');
            document.querySelector(
                '.showScore',
            ).textContent = `Your Score = ${score}`;
            overlay.addEventListener('click', function () {
                overlay.classList.add('hidden');
            });

            user.style.background='red'
        user.style.color='white'
        vs.style.background='blue'
        vs.style.color='red'
        numb.style.background='green'
        numb.style.color='white'
        userGuess.style.background='yellow'
        userGuess.style.color='blue'
        if (score > highscore){
            highscore=score
            highScore.textContent = highscore;
        }
        }else if (guess !== number && guess <= 20 && guess >= 0){
            if (score > 1){
                displayMsg(guess < number ? 'Too Low': 'Too High');
                score--;
                scoreInfo.textContent=score;
            }else {
                displayMsg('you loose');
            }
        }
        else {
            displayMsg('Out of Range');
            show.classList.remove('hide');
            range.textContent= 'Out of Range'
        }
        btnag.addEventListener('click',()=>{
            number = Math.trunc(Math.random()*20+1);
            score = 10;
            console.log(number);
            document.querySelector('.number').textContent = '?';
            user.textContent = '!';
            vs.textContent = '≠';
            bdy.style.background = 'black';
            user.style.background='white'
            user.style.color='black'
            vs.style.background='grey'
            vs.style.color='white'
            numb.style.background='white'
            numb.style.color='black'
        userGuess.style.background='black'
        userGuess.style.color='white'
            displayMsg ('Start guessing')
        })

    };
    btn.addEventListener('click', winCheck);
});


btn3.addEventListener('click',()=>{
    diff.classList.add('hidden');
    overlay.classList.add('hidden');
     //initialization
let score = 5;
let highscore = 0;
let number = Math.trunc(Math.random()*20+1);
console.log(number);
scoreInfo.textContent = score
scoreInfo.textContent = score
    const displayMsg = (message) =>{
        msg.textContent = message;
    };
    const winCheck = () => {
        const guess = Number(userGuess.value);
        user.textContent = guess;
        
        if (!guess){
            displayMsg('input a number');
        }else if (guess === number){
            win.classList.remove('hidden');
            displayMsg('You Won');
            document.querySelector('.number').textContent = number;
            vs.textContent ='=';
            bdy.style.background = 'url(./img/celeb.gif)';

            overlay.classList.remove('hidden');
            document.querySelector(
                '.showScore',
            ).textContent = `Your Score = ${score}`;
            overlay.addEventListener('click', function () {
                overlay.classList.add('hidden');
            });

            user.style.background='red'
        user.style.color='white'
        vs.style.background='blue'
        vs.style.color='red'
        numb.style.background='green'
        numb.style.color='white'
        userGuess.style.background='yellow'
        userGuess.style.color='blue'
        if (score > highscore){
            highscore=score
            highScore.textContent = highscore;
        }
        }else if (guess !== number && guess <= 20 && guess >= 0){
            if (score > 1){
                displayMsg(guess < number ? 'Too Low': 'Too High');
                score--;
                scoreInfo.textContent=score;
            }else {
                displayMsg('you loose');
            }
        }
        else {
            displayMsg('Out of Range');
            show.classList.remove('hide');
            range.textContent= 'Out of Range'
        }
        btnag.addEventListener('click',()=>{
            number = Math.trunc(Math.random()*20+1);
            score = 10;
            console.log(number);
            document.querySelector('.number').textContent = '?';
            user.textContent = '!';
            vs.textContent = '≠';
            bdy.style.background = 'black';
            user.style.background='white'
            user.style.color='black'
            vs.style.background='grey'
            vs.style.color='white'
            numb.style.background='white'
            numb.style.color='black'
        userGuess.style.background='black'
        userGuess.style.color='white'
            displayMsg ('Start guessing')
        })
    };
    btn.addEventListener('click', winCheck);
});

