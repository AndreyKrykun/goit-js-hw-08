import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (formData === null) {
    formData = {
        email: "",
        message: "",
    };
}

const refs = {
form: document.querySelector('.feedback-form'),
input: document.querySelector('.feedback-form input'),
textarea: document.querySelector('.feedback-form textarea')
};

refs.input.value = formData.email;
refs.textarea.value = formData.message;

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(handleChange, 500));


function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function handleChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

