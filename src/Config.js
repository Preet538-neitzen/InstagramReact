import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCFKLx3a6E1GAs_x7C0lhu-S2dK0N1o6gQ",
    authDomain: "insta-f8f3f.firebaseapp.com",
    databaseURL: "https://insta-f8f3f.firebaseio.com",
    projectId: "insta-f8f3f",
    storageBucket: "insta-f8f3f.appspot.com",
    messagingSenderId: "664198041058",
    appId: "1:664198041058:web:1c905c14512578b3f27dbb",
    measurementId: "G-QYWB22JSP0"
  };
const fire = firebase.initializeApp(config);
export default  fire