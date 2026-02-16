// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// 🔥 Your Firebase Config (Console la irukum)
const firebaseConfig = {
  apiKey: "AIzaSyCZa2oeJpmSsUqZl5zz03uUW9yYRG-lUFI",
  authDomain: "loginpage-9e6b6.firebaseapp.com",
  databaseURL: "https://loginpage-9e6b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loginpage-9e6b6",
  storageBucket: "loginpage-9e6b6.firebasestorage.app",
  messagingSenderId: "265148980999",
  appId: "1:265148980999:web:da1eb318c46ea83d22efa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Form Handling
const form = document.getElementById("updateForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const userId = document.getElementById("userId").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Password match check
  if (newPassword !== confirmPassword) {
    message.innerText = "Passwords do not match!";
    message.style.color = "red";
    return;
  }

  // Simple hash (Demo purpose only)
  const hashedPassword = btoa(newPassword);

  const userRef = ref(database, "users/" + userId);

  update(userRef, {
    password: hashedPassword
  })
  .then(() => {
    message.innerText = "Password Updated Successfully!";
    message.style.color = "green";
    form.reset();
  })
  .catch((error) => {
    message.innerText = "Error: " + error.message;
    message.style.color = "red";
  });
});
