import firebase from 'firebase/app'
import 'firebase/firestore'
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBp7TTVaqcTqCdWPd97E3bJ052W_AKEXt4",
  authDomain: "ninja-vuetify.firebaseapp.com",
  databaseURL: "https://ninja-vuetify.firebaseio.com",
  projectId: "ninja-vuetify",
  storageBucket: "ninja-vuetify.appspot.com",
  messagingSenderId: "531077329257"
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
// Para usar la base de datos en los componentes la exportamos
export default db;