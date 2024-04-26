import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDb_UKPjrVqVM00nwyxgJfNiz7IwLYnJeE",
  authDomain: "tfg-android-2e767.firebaseapp.com", 
  projectId: "tfg-android-2e767",
  storageBucket: "tfg-android-2e767.appspot.com", 
  messagingSenderId: "800342524734",
  appId: "1:800342524734:android:dc829a4f9ccc5351d8626f",
};

const appFire = initializeApp(firebaseConfig);
export default appFire;