import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9eGkV6F4VqcW5zTfUFfMGmPKnpFemleI",
  authDomain: "enterprise-react.firebaseapp.com",
  projectId: "enterprise-react",
  storageBucket: "enterprise-react.appspot.com",
  messagingSenderId: "113426742177",
  appId: "1:113426742177:web:5f2bb02779902992ef29e0",
  measurementId: "G-12C5TS44RE"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export function getData(): void {
  const db = firebase.firestore();
  db.settings({});
  const contractRef = db.collection('contracts');
  contractRef.get().then((doc) => {
    doc.forEach(x => {
      console.log(x.data());
    });
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}
