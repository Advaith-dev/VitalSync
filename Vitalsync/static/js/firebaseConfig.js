// CDN link to firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'

// Credentials
const firebaseConfig = {
  apiKey: 'AIzaSyBjG0S014EWiaH4BBUsg_JpRjr4pbw6Ffw',
  authDomain: 'vitals-monitor-9a695.firebaseapp.com',
  databaseURL:
    'https://vitals-monitor-9a695-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vitals-monitor-9a695',
  storageBucket: 'vitals-monitor-9a695.appspot.com',
  messagingSenderId: '373003072947',
  appId: '1:373003072947:web:75790f8998ae0f69d1c7c6',
  measurementId: 'G-L8F1H5XV4R'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export { app }


