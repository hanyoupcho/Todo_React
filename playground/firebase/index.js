/*jshint esversion: 6 */
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC8l3UvPJDWmq2RFFCNBuG7EdJM05D9BhE",
  authDomain: "todoreact-29d1a.firebaseapp.com",
  databaseURL: "https://todoreact-29d1a.firebaseio.com",
  projectId: "todoreact-29d1a",
  storageBucket: "todoreact-29d1a.appspot.com",
  messagingSenderId: "279500777754"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  appName: 'Todo App',
  isRunning: true,
  user: {
    age: 35,
    name: 'Hanyoup'
  }
});

firebaseRef.child('user').set({
  name: 'Hanyoup'
});
