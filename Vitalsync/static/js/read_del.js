import { app } from './firebaseConfig.js';
import {
  getDatabase,
  ref,
  onValue,
  set
} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js';

const db = getDatabase();

const Ref = ref(db, 'Patients/')
  onValue(Ref, snapshot => {
  const data = snapshot.val();
  console.log(data);

  let inner_html = "";
  const base_div = document.getElementById("base");
  for (var i in data){
    if (data[i].spO2 == -1) {
        data[i].spO2 = 0;
    }
    if(data[i].bpm == -1)
    {
      data[i].bpm = 0;
    }
    inner_html += `<div class="col">
                      <div class="card">
                        <div class="card-body">
                          <h3><strong>${data[i].name}<strong></h3>
                          <p class="card-text">bpm: ${data[i].bpm}<br>spO2: ${data[i].spO2}<br>room no:${data[i].room_no}</p>
                        </div>
                      </div>
                    </div>`
  }
  base_div.innerHTML = inner_html;
})







