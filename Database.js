import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyDnk0PoGNzKGtnIIsFXP-yGTDcggcbf9uE",
  authDomain: "contact-page-61835.firebaseapp.com",
  projectId: "contact-page-61835",
  storageBucket: "contact-page-61835.firebasestorage.app",
  messagingSenderId: "352806983920",
  appId: "1:352806983920:web:9933330eedbeee1da64a35",
  measurementId: "G-02MN2XX2K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(document.getElementById("email").value)
const db = getDatabase(app)
document.getElementById("submit").addEventListener('click', function (event) {
  event.preventDefault()
  set(ref(db, 'User data/' + document.getElementById("name").value),
    {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      itemscount: document.getElementById("items").value,
      address: document.getElementById("address").value
    })
  Swal.fire({
    title: "Data saved Succesfully!",
    text: "You clicked the button!",
    icon: "success"
  });
})
