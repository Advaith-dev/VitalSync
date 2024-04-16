import {app} from './firebaseConfig.js';

import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
const db = getDatabase();

function addPatient() {
  event.preventDefault();
    const pId = document.getElementById("id").value;
    const pName = document.getElementById("fname").value + " " + document.getElementById("lname").value ;
    const pAge = document.getElementById("age").value;
    const pGender = document.getElementById("gender").value;
    const roomno = document.getElementById("roomno").value;

    set(ref(db, 'Patients/' + pId), {
      name: pName,
      age: pAge,
      gender: pGender,   
      bpm:0,
      spO2:0,
      room_no:roomno
    });
  }

document.getElementById("addButton").addEventListener("click", addPatient);

