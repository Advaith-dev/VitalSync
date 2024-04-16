import { app } from "./firebaseConfig.js";

import { getAuth, signInWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const auth = getAuth();

function sign_In() {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log("sign in successful");
      window.location.href = "http://localhost:5500/index.html"
      // ...
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log("Error");
      document.getElementById("em").innerHTML = "Inavlid credentials";
    });
}

document.getElementById("snButton").addEventListener('click', sign_In);