import firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyAk3GfAPNFkmoxTuuVivIxKws8-cQwQlMQ",
    authDomain: "unimate-3f01e.firebaseapp.com",
    databaseURL: "https://unimate-3f01e.firebaseio.com",
    projectId: "unimate-3f01e",
    storageBucket: "unimate-3f01e.appspot.com",
    messagingSenderId: "531364008743",
    appId: "1:531364008743:web:b6b52c49031996f4ff8f02",
    measurementId: "G-VGXGLXBDDX"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;