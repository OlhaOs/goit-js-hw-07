const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value.trim() === '') {
    return alert('Empty field');
  }

  const dataEL = {
    email: email.value,
    password: password.value,
  };

  console.log(dataEL);
  e.currentTarget.reset();
}
