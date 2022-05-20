var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyC1nUaAVessP122h2pvmuVBlHrVymJgg20",
  authDomain: "esp32-e5c58.firebaseapp.com",
  databaseURL: "https://esp32-e5c58-default-rtdb.firebaseio.com",
  projectId: "esp32-e5c58",
  storageBucket: "esp32-e5c58.appspot.com",
  messagingSenderId: "416269725534",
  appId: "1:416269725534:web:b1136cb75a96cf4883e9cf",
  measurementId: "G-NTEBVYE1FM"
};
const fire = firebase.initializeApp(config);
module.exports = fire;