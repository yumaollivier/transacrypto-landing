const forms = document.querySelectorAll('form');

forms[0].addEventListener('submit', formSubmit);
forms[1].addEventListener('submit', contactFormSubmit);

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('FirstName', document.querySelectorAll('input[name="firstName"]')[0].value);
  formData.append('LastName', document.querySelectorAll('input[name="lastName"]')[0].value);
  formData.append('Email', document.querySelectorAll('input[name="email"]')[0].value);

  fetch('https://getform.io/f/e6abeb82-7c96-4a41-ba73-bde153dff6a3', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      document.querySelectorAll('input').forEach(input => {
        input.value = null;
      });
      document.querySelector('.banner-title').innerHTML = 'Merci Beaucoup !'
      //   document.querySelector('.container__content').classList.add('hidden');
      //   document.querySelector('.valid').classList.remove('hidden');
      //   document.querySelector('.valid').classList.add('visible');
    })
    .catch(error => {
        document.querySelectorAll('input').forEach(input => {
            input.value = null;
        });
        document.querySelector('.banner-title').innerHTML = 'Vos coordonnées n\'ont pas été envoyées...'
    //   document.querySelector('.container__content').classList.add('hidden');
    //   document.querySelector('.invalid').classList.remove('hidden');
    //   document.querySelector('.invalid').classList.add('visible');
    });
}

function contactFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('FirstName', document.querySelectorAll('input[name="firstName"]')[1].value);
  formData.append('LastName', document.querySelectorAll('input[name="lastName"]')[1].value);
  formData.append('Email', document.querySelectorAll('input[name="email"]')[1].value);
  formData.append(
    'Message',
    document.querySelector('textarea[name="message"]').value
  );

  fetch('https://getform.io/f/e6abeb82-7c96-4a41-ba73-bde153dff6a3', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      document.querySelectorAll('input').forEach(input => {
        input.value = null;
      });
      document.querySelector('textarea').value = null;
      document.querySelector('.message').innerHTML = "Merci Beaucoup !"
    //   document.querySelector('.container__content').classList.add('hidden');
    //   document.querySelector('.valid').classList.remove('hidden');
    //   document.querySelector('.valid').classList.add('visible');
    })
    .catch(error => {
      document.querySelectorAll('input').forEach(input => {
        input.value = null;
      });
        document.querySelector('.message').innerHTML = 'Vos coordonnées n\'ont pas été envoyées...'
        //   document.querySelector('.container__content').classList.add('hidden');
    //   document.querySelector('.invalid').classList.remove('hidden');
    //   document.querySelector('.invalid').classList.add('visible');
    });
}
