import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
textAreaMessage();
const formData = {email:input.value, message:textarea.value};


form.addEventListener('input', throttle(onFormMessage, 500));
form.addEventListener('submit', onSubmitForm);


function onFormMessage(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}


function textAreaMessage() {
    const saveMsg = localStorage.getItem(LOCALSTORAGE_KEY);
    const response = JSON.parse(saveMsg)

    if (response) {
        input.value = response.email || " ";
        textarea.value = response.message || " ";
    }

}










// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
