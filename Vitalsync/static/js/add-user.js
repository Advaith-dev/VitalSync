import { app } from "./firebaseConfig.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const auth = getAuth();

function createUser() {
  event.preventDefault();

  const  email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      window.location.href = "http://localhost:5500/pages-sign-in.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
}

document.getElementById("cButton").addEventListener("click",createUser);
