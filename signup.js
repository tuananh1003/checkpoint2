import { auth } from "../checkpoint2/config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const emailInput=document.querySelector('#email')
const passInput=document.querySelector('#password')
const button=document.querySelector('#logup')

const xulydangky=(e)=>{
    e.preventDefault()
    const emailValue=emailInput.value
    const passValue=passInput.value
    console.log(emailValue,passValue)
    createUserWithEmailAndPassword(auth, emailValue, passValue,)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user)
    alert('dang ky thanh cong')
    window.location.href='./signin.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
}
button.addEventListener('click',xulydangky)