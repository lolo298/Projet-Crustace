import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://projetcrustace-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let items = ref(database, "items");
let itemsList;
onValue(items, (snapshot) => {
  const data = snapshot.val();
  itemsList = data;
});
