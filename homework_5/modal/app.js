
const form = document.getElementById('my-form');
form.addEventListener('submit', submitForm);


const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];


closeButton.addEventListener('click', closeModal);

function submitForm(event) {
  event.preventDefault();

  
  const formData = new FormData(form);


  fetch('https://example.com/api', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.status === 200) {
  
      showModal('Success!', 'Your form has been submitted.');
    } else if (response.status === 400) {
      
      response.json().then(data => {
        showModal('Error!', data.message);
      });
    } else {
      
      showModal('Error!', 'An error occurred while submitting the form. Please try again later.');
    }
  })
  .catch(error => {
   
    showModal('Error!', 'A network error occurred. Please check your internet connection and try again.');
  });
}

function showModal(title, message) {
    
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = message;
    
   
    const modalTitle = document.createElement('h2');
    modalTitle.innerText = title;
    modalMessage.insertBefore(modalTitle, modalMessage.firstChild);
    
   
    modal.style.display = 'block';
    }
    
    function closeModal() {

    modal.style.display = 'none';
    
    
    form.reset();
    }
