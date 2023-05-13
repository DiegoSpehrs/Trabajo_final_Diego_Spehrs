import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIi1CfJUc-e-WsWZE5ecfeAHP3uVmUpzE",
    authDomain: "trabajo-final-diego-spehrs.firebaseapp.com",
    projectId: "trabajo-final-diego-spehrs",
    storageBucket: "trabajo-final-diego-spehrs.appspot.com",
    messagingSenderId: "444003813849",
    appId: "1:444003813849:web:90a000b55f0c3bb7aa71c8"
  };

  const app = initializeApp(firebaseConfig);
  export const db  = getFirestore(app);