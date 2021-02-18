import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaK7U_vkASY8DyAUFJuntPkKmhPtajCSw",
    authDomain: "idobatakaigi-with-ham-68330.firebaseapp.com",
    databaseURL: "https://idobatakaigi-with-ham-68330-default-rtdb.firebaseio.com",
    projectId: "idobatakaigi-with-ham-68330",
    storageBucket: "idobatakaigi-with-ham-68330.appspot.com",
    messagingSenderId: "208117286606",
    appId: "1:208117286606:web:11e7a8f80acf2a9d4bb29f"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({name,text}) => {
    messageRef.push({name,text})
  };