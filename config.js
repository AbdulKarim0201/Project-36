import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCK69ebInKuBbuqa2EK1u5JZ8r-Fm4OGPc",
  authDomain: "atetendence-app.firebaseapp.com",
  databaseURL: "https://atetendence-app-default-rtdb.firebaseio.com",
  projectId: "atetendence-app",
  storageBucket: "atetendence-app.appspot.com",
  messagingSenderId: "738375997348",
  appId: "1:738375997348:web:c43f649150e26a25405331"
};
firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 


       