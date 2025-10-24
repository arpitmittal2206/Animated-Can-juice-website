import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCM69LqYeLSk5lHAs0ltcLFbb5ZASNV48A",
  authDomain: "page-ramzan-project-f3d10.firebaseapp.com",
  projectId: "page-ramzan-project-f3d10",
  storageBucket: "page-ramzan-project-f3d10.firebasestorage.app",
  messagingSenderId: "183724192077",
  appId: "1:183724192077:web:c4c1d9eb9ab18d347b4704",
  measurementId: "G-F1N5F6YTH5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();

document.getElementById("google-login").addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log("User Info:", user);
      alert(`Welcome, ${user.displayName}!`);
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert("Login Failed! Try Again.");
    });
});