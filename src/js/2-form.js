const feedbackForm = document.querySelector('.feedback-form');

const LoadFeedbackForm = () => {
  const formData = {
    email: '',
    message: '',
  };

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData.email = JSON.parse(savedData).email;
    formData.message = JSON.parse(savedData).message;
    feedbackForm.email.value = formData.email;
    feedbackForm.message.value = formData.message;
  }

  return formData;
};

const formData = LoadFeedbackForm();

const onFeedbackFormInput = event => {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
};

feedbackForm.addEventListener('change', onFeedbackFormInput);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
