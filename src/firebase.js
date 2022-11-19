import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_YW43wFdfstkWZj-MZPLx_gIlxDXcAKI",
  authDomain: "socialblog-bf19a.firebaseapp.com",
  projectId: "socialblog-bf19a",
  storageBucket: "socialblog-bf19a.appspot.com",
  messagingSenderId: "1092350470959",
  appId: "1:1092350470959:web:7baf4c0b637f83dad14fda"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
