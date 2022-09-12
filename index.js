const display = document.querySelector('#display'); /*retorna o primero elemento dentro do documento*/
const buttons = document.querySelectorAll('button'); /*retorna TODOS elemento dentro do documento*/

buttons.forEach((item) => {
    item.onclick = () => { /*quando vc clica em um item(qualquer botão irá executar uma nova função)*/
        if (item.id == 'clear') { /*SE o id for igual a Clear retorna vazio*/
            display.innerText = '';/*innerText retorna todo o texto*/
        } else if (item.id == 'backspace') { 
            let string = display.innerText.toString(); 
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    backgroundDark.classList.toggle('active')
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}