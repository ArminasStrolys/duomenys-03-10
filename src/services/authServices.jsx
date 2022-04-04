import firebase from "firebase";
import { app } from "../firebase";

const auth = app.auth();
const db = app.firestore();

const register = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
  }
};

const logout = () => {
  auth.signOut();
}

const resetPw = async (email) => {
  try{
await auth.sendPasswordResetEmail(email)
alert('Reset completed')
  } catch(err){
    console.log(err)
  }
  auth.signOut();
}

export default firebase;
export { auth, db, register, login, logout, resetPw };
