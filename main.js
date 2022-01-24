// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')

// Your JavaScript code goes here!
let handleServerResponse = (e) => {
  mimicServerCall()
  .then(response => {
    console.log(response)
    if(e.target.textContent === EMPTY_HEART) {
      e.target.textContent = FULL_HEART
      e.target.classList.add('activated-heart')
    } else {
      e.target.textContent = EMPTY_HEART
      e.target.classList.remove('activated-heart')
    }
  })
  .catch(error => {
    console.log(error)
    modalMessage.textContent = error
    modal.classList.remove('hidden')
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000)
  })
}
      
      


document.addEventListener('DOMContentLoaded', () => {
  let likeButton = document.querySelectorAll('span.like-glyph')
  for (let item of likeButton) {
    item.addEventListener('click', handleServerResponse)
  } 
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
