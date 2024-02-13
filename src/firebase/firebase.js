import { initializeApp } from "firebase/app";
import { getauth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQk0-cAaasZ1c_Qlaj1GYPOkaK64Cog48",
  authDomain: "nike-project-6e09d.firebaseapp.com",
  projectId: "nike-project-6e09d",
  storageBucket: "nike-project-6e09d.appspot.com",
  messagingSenderId: "331636842651",
  appId: "1:331636842651:web:ea57a2ba4b1c1ad9b5663e"
};

const app = initializeApp(firebaseConfig);
export const auth = getauth(app)
export default app