// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlFVI_lGkjjPJ6lbLJ9t8yhOLkX8_ksH0",
  authDomain: "twizzlerreal.firebaseapp.com",
  databaseURL: "https://twizzlerreal-default-rtdb.firebaseio.com",
  projectId: "twizzlerreal",
  storageBucket: "twizzlerreal.appspot.com",
  messagingSenderId: "139487492381",
  appId: "1:139487492381:web:16637bdb5836ed3f1549f4",
  measurementId: "G-PY6W7FHJ4P"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userList = document.querySelector('#user-list');
const from = document.querySelector('#add-user-form');

//make element and render user
function renderUser(doc)
{
    let li = document.createElement('li');
    let name = document.createElement('span');
    let score = document.createElement('span');

    li.setAttribute('data-id', doc.id);

    name.textContent = doc.data().name;
    score.textContent = doc.data().score;

    li.appendChild(name);
    li.appendChild(score);
    
    userList.appendChild(li);
}

// getting data



const querySnapshot = await getDocs(collection(db, 'users'));
querySnapshot.docs.forEach(doc => {
  renderUser(doc);
});

//saving data
from.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: from.name.value,
    score: from.score.value
  };
  const dbRef = collection(db, 'users');
  addDoc(dbRef, data)
  .then(docRef => {
    console.log("u did it right bozo");
  })
  .catch(error => {
    console.log(error);
  })
})
