const forms = document.querySelectorAll('form');
const notif = document.querySelector('.notification');

const notificationHandler = (isError = false, message) => {
  notif.classList.add(`visible${isError ? ' error' : ''}`);
  notif.querySelector('p').innerHTML = message;
  setTimeout(() => {
    notif.classList.remove('visible');
  }, 5000);
};

const formSubmit = e => {
  e.preventDefault();

  const formData = new FormData();
  const name = document.querySelectorAll('input[name="name"]')[0]
    .value;
  const email = document.querySelectorAll('input[name="email"]')[0].value;
  if (name.length > 0 && email.length > 0) {
    const formData = new FormData();
    formData.append('firstName', name);
    formData.append('LastName', lastName);
    formData.append('Email', email);

    fetch('https://getform.io/f/e6abeb82-7c96-4a41-ba73-bde153dff6a3', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        document
          .querySelectorAll('input[type="text"], input[type="email"], textarea')
          .forEach(input => {
            input.value = null;
          });
        notificationHandler(
          false,
          '👌 Vos données ont bien été envoyées ! Merci beaucoup !'
        );
      })
      .catch(error => {
        notificationHandler(
          true,
          "😭 Vos coordonnées n'ont pas pu être envoyées..."
        );
      });
  } else {
    notificationHandler(
      true,
      '🤨 Merci de bien vouloir remplir tous les champs.'
    );
  }
};

const contactFormSubmit = e => {
  e.preventDefault();

  const name = document.querySelectorAll('input[name="name"]')[1]
    .value;
  const email = document.querySelectorAll('input[name="email"]')[1].value;
  const message = document.querySelector('textarea[name="message"]').value;
  if (
    name.length > 0 &&
    email.length > 0 &&
    message.length > 0
  ) {
    const formData = new FormData();
    formData.append('firstName', name);
    formData.append('Email', email);
    formData.append('Message', message);

    fetch('https://getform.io/f/e6abeb82-7c96-4a41-ba73-bde153dff6a3', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        document
          .querySelectorAll('input[type="text"], input[type="email"], textarea')
          .forEach(input => {
            input.value = null;
          });
        notificationHandler(
          false,
          '👌 Vos données ont bien été envoyées ! Merci beaucoup !'
        );
      })
      .catch(error => {
        notificationHandler(
          true,
          "😭 Vos coordonnées n'ont pas pu être envoyées..."
        );
      });
  } else {
    notificationHandler(
      true,
      '🤨 Merci de bien vouloir remplir tous les champs.'
    );
  }
};

forms[0].addEventListener('submit', formSubmit);
forms[1].addEventListener('submit', contactFormSubmit);
