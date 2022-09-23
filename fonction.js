import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js';

const firebaseConfig = {
    databaseURL: "https://projetcrustace-default-rtdb.europe-west1.firebaseio.com/"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);