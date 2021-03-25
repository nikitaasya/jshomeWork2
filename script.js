const test = alert('Выберите верные утверждения:');

let ok = 0;
let cancel = 0;
const question1 = confirm('1. Преобразование Number (“false”) вернет число 0.');
if (question1 === true) {
    ok++
} else {
    cancel++;
};
const question2 = confirm('2. Значение переменной let нельзя изменить после инициализации.');
if (question2 === false) {
    ok++;
} else {
    cancel++;
}
const question3 = confirm('3. У объекта Math существует метод для вычисления квадратного корня.');
if (question3 === true) {
    ok++;
} else {
    cancel++;
}
const question4 = confirm('4. Результат выполнения логической операции - это булево значение.');
if (question4 === true) {
    ok++;
} else {
    cancel++;
}
const question5 = confirm('5. JS - слишком сложный и ему невозможно научиться.');
if (question5 === false) {
    ok++;
} else {
    cancel++;
}
alert(`Правильных ответов: ${ ok }, неравильных ответов: ${ cancel }`);