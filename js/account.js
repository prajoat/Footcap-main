const firebaseConfig = {
  apiKey: "AIzaSyCh0-1MLdjFiAPjzRtOM42LyMgsQDoNdrI",
  authDomain: "shoe-2267c.firebaseapp.com",
  databaseURL: "https://shoe-2267c-default-rtdb.firebaseio.com",
  projectId: "shoe-2267c",
  storageBucket: "shoe-2267c.firebasestorage.app",
  messagingSenderId: "490934030408",
  appId: "1:490934030408:web:b95a5c26139644b37e487d",
  measurementId: "G-3FZ62W8E8L"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var contactFormDB = firebase.database().ref("account");
  
  // ... (Your Firebase configuration remains the same)

// Add an event listener to the form with the ID "account" for the "submit" event
document.getElementById("account").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var password = getElementVal("password"); // Change "msgContent" to "password"

    saveMessages(name, emailid, password); // Update the function call as well

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("account").reset();
}

const saveMessages = (name, emailid, password) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        password: password, // Change "msgContent" to "password"
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
