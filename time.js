const time = document.getElementById('time');// khai bao bien time lay id tu html
const greeting = document.getElementById('greeting');
const name_one = document.getElementById('name');
const todo = document.getElementById('todo');
const snvv = document.getElementById('hpbd');
const kich = document.getElementById("kich");

function addZero(n){
    let result;
    if (parseInt(n,10) <10 ){
        result = '0'+n;
        return  result;
    } else {
        result = n;
        return  result;
    }
}

function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let amPm;
    if(hour >= 12){
        amPm = 'PM'
    } else{
        amPm = 'AM'
    }

    time.innerHTML= `${hour}:${addZero(min)}:${addZero(sec)}   ${amPm}`
    setTimeout(showTime,1000);// (ms)
}

function hpbd() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    if (month + 1 == 1) {
        if (day == 16 ){
        snvv.innerHTML = `Happy Birth Day `;
        }
    }
}

name_one.innerHTML='Thành Long';

// kich.innerHTML = 'Try harder';
// function loiChuc(){
//     alert("Đây là lời chúc")
// }
// kich.addEventListener('click', loiChuc);
function ngauNhien(){
    let a = Math.floor(Math.random() * 20)
    var array = ['Life is a story makes yours the best seller', 
    'Today is hard, tomorrow will be worse but the day after tomorrow will be sunshine.',
    'Everything you can imagine is real.','Keep your eyes on the stars and your feet on the ground.',
    'The way to get started is to quit talking and begin doing.',
'Everything has beauty, but not everyone sees it.',
'Nothing is impossible, the word itself says "Im possible!".',
'If you cannot do great things, do small things in a great way.',
'All our dreams can come true, if we have the courage to pursue them.',
'Defeat is simply a signal to press onward.',
'Life always offers you a second chance. Its called tomorrow.',
'Where there is a will, there is a way.',
'Genius is one percent inspiration and ninety-nine percent perspiration',
'Set your target and keep trying until you reach it.',
'Im here for you if anything is needed.',
'You are what you do, not what you say you will do.',
'Life is better when you are laughing',
'I may not be there yet, but Im closer than I was yesterday',
'You are amazing, brave, strong, beautiful and perfect in every way',
'Im not lazy. Im on energy-saving mode.',
'You will never be brave if you dont get hurt.You will never learn if you dont make mistakes.You will never be successful if you dont encounter failure.'

];
    alert(`${array[a]}`)
}
kich.addEventListener('click', ngauNhien);


function setBackground(){
    let today = new Date();
    let hour = today.getHours();

    if (hour <= 12){
        document.body.style.backgroundImage=
        "url('./img/morning..jpg')";
        greeting.textContent='Good moring!'
    }else if (hour <=18){
        document.body.style.backgroundImage=
        "url('./img/afternoon..jpg')";
        greeting.textContent= 'Good afternoon!'
    }else {
        document.body.style.backgroundImage=
        "url('./img/night..jpg')";
        greeting.textContent='Good night!'
    }
}

hpbd();
showTime();
setBackground();