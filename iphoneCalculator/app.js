let display = document.querySelector('.main__display');
let a = '';
let b = '';
let sign = '';
let finish = false;
let memory = 0;
let rad = false;

const number = ['0','1','2','3','4','5','6','7','8','9','.']; //змінні 
const symbol = ['+', '-', '*', '/', 'xy', 'squareY', 'ee'];

function clearAll() {               //функція очистки поля
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = '0';
}

function action(arg) {      //функція яка відстежує кнопки (числові кнопки чи символьні)
    display.textContent = '';
    if(number.includes(arg)){       //вводим любу цифру або крапку
        if(b === '' && sign === ''){        //перевірка чи пустий b і чи не введений символ
            if(arg === '.') a = '0';
            a += arg;
            display.textContent = a;
        }
        else if(a !== '' && b !== '' && finish){    //перевірка після того як натиснули = і хочемо ще працювати далі
            if(arg === '.') b = '0.';
            else b = arg;
            finish = false;
            display.textContent = b;
        }   
        else {      //заповняємо b
            if(arg === '.') b = '0';
            b += arg;
            display.textContent = b;
        } 
    }
    if(symbol.includes(arg)){                                           // один із символів +,-,*,/
        if(a === '' && b === '') return display.textContent = '0';      // тиснемо символ не ввівши ніяких цифр
        if(finish) {                                                    // тиснемо символ після '=' 
            display.textContent = a; 
            sign = arg;
            return;
        }
        if(a !== '' && b !== '') {      //коли виконуємо поступово дії не натискаючи "="
            consider();
            b = '';
        }
        consider();
        sign = arg;
        display.textContent = a;
        return;
    }
    if(arg === '='){
        if(a === '' && b === ''){               // тиснемо символ не ввівши ніяких цифр
            return display.textContent = '0';
        } 
        if(b === '') b = a;         // тиснемо дорінює не ввіши 'b'
        consider();
        finish = true;
    }
    if(arg === '+/-'){
        if(b === '' || finish){
            a = - (a);
            display.textContent = a;
            return;
        } 
        if(a !== '' && b !== ''){
            b = - (b);
            console.log('tag2');
            display.textContent = b;
        }
    }
    return;
}

function powerCalc(arg){
    switch(arg) {
        case '%':  a = a/100;
            break;
        case 'x2': a = a ** 2;
            break;
        case 'x3': a = a ** 3;
            break;
        case '10x': a = 10 ** a;
            break;
        case 'e-x': a = 2.718 ** a;
            break;
        case '1/x': a = 1 / a;
            break;
        case 'square2': a = Math.sqrt(a);
            break;
        case 'square3': a = Math.cbrt(a);
            break;
        case 'ln': a = Math.log(a);
            break;
        case 'log10': a = Math.log10(a);
            break;
        case 'x!': a = factorialize(a);
            break;
        case 'sin': 
            if(rad === true) a = Math.sin(a);
            if(rad === false) a = Math.sin(Math.PI/180*a);
            break;
        case 'cos': 
            if(rad === true) a = Math.cos(a);
            if(rad === false) a = +Math.cos(a * Math.PI/180).toFixed(15);
            break;
        case 'tan': 
            if(rad === true) a = Math.tan(a);
            if(rad === false) {
                if(a === '90') {
                    a = 'Error';
                    break;
                }
                a = +Math.tan(Math.PI/180*a).toFixed(5);
            }
            break;
        case 'e': a = Math.E;
            break;
        case 'sinh': a = Math.sinh(a);
            break;
        case 'cosh': a = Math.cosh(a);
            break;
        case 'tanh': a = Math.tanh(a);
            break;
        case 'pi': a = Math.PI;
            break;
        case 'rand': a = Math.random();
            break;
    }
    display.textContent = a;
    return;
}
function  memoryFunc(act){
    if(act === 'result') display.textContent = memory;
    if(act === 'clean'){
        memory = 0;
        display.textContent = '0';
    }
    if(act === 'inc'){
        consider();
        memory += a;
        display.textContent = a;
    }
    if(act === 'dec'){
        consider();
        memory -= a;
        display.textContent = a;
    }
    a = '';
    b = '';
    sign = '';
}

function consider(){ //Функція дорівнює (додає, віднімає і т.д.)
    switch(sign){
    case '+':
        a = (+a) + (+b);
        break;
    case '-':
        a = a - b;
        break;
    case '*':
        a = a * b;
        break;
    case '/':
        if(b === '0'){          //  Коли ділимо на 0
            display.textContent = 'Error';
            b = '';
            a = '';
            sign = '';
            return;
        }
        a = a / b;
        break;
    case 'xy': a = a ** b;
        break;
    case 'squareY': a = a ** (1/b);
        break;
    case 'ee': 
        a = a * (10 ** b);
        break;
    }
    display.textContent = a;
}

function factorialize(num) {
    if (num < 0) return 'Error';
    else if (num == 0) return 1;
    else return (num * factorialize(num - 1));
}

function changeNum() {
    let button = document.querySelector('.rad');
    let mainAddDisplay = document.querySelector('.main__additional-display');
    if(button.innerText === 'Rad') {
        button.innerText = 'Deg';
        mainAddDisplay.innerText = 'Rad';
        rad = true;
    }
    else {
        button.innerText = 'Rad';
        mainAddDisplay.innerText = '';
        rad = false;
    }
}
  