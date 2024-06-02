import { auth } from "../checkpoint2/config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const emailInput=document.querySelector('#email')
const passInput=document.querySelector('#password')
const button=document.querySelector('#login')

const xulydangky=(e)=>{
    e.preventDefault()
    const emailValue=emailInput.value
    const passValue=passInput.value
    console.log(emailValue,passValue)
    signInWithEmailAndPassword(auth, emailValue, passValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('dang nhap thanh cong')
    window.location.href='./home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
button.addEventListener('click',xulydangky)