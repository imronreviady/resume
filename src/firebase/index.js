import * as firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBGBO27_BplKSnNesIjSM7IbW126xICU2w",
	authDomain: "imron-resume.firebaseapp.com",
	databaseURL: "https://imron-resume.firebaseio.com",
	projectId: "imron-resume",
	storageBucket: "",
	messagingSenderId: "520574390656"
};
firebase.initializeApp(config);

export const worksDb = firebase.database().ref('/works');
export const blogDb = firebase.database().ref('/blogs');