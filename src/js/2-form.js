const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

// Загрузка данных из локального хранилища при загрузке страницы
window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
  }
});

// Сохранение данных при вводе
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim() || '';
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обработка отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Заполните все поля');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
