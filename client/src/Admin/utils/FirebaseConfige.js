
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDK3czGOUroGrZy2T1-fGmAnvmfjWZzAd0",
  authDomain: "express-api-storage-89fcd.firebaseapp.com",
  projectId: "express-api-storage-89fcd",
  storageBucket: "express-api-storage-89fcd.appspot.com",
  messagingSenderId: "821772762332",
  appId: "1:821772762332:web:9b39eb5f307fbf76304819"
};

const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app)