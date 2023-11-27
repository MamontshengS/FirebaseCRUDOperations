import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDzeYx3Ate6ud3HBKW2-P9gX7yij3jq-t8",
  authDomain: "fir-77b36.firebaseapp.com",
  databaseURL: "https://fir-77b36-default-rtdb.firebaseio.com",
  projectId: "fir-77b36",
  storageBucket: "fir-77b36.appspot.com",
  messagingSenderId: "1010786602902",
  appId: "1:1010786602902:web:938930e249ae01e74657b7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }; 
