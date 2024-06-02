import { auth } from "../checkpoint2/config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const logoutbtn=document.querySelector('#logout')
const xulydangxuat=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('dang xuat thanh cong')
        window.location.href='./signup.html'
      }).catch((error) => {
        // An error happened.
      });
}
logoutbtn.addEventListener('click', xulydangxuat)