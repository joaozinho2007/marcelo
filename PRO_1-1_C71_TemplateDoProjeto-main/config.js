import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
