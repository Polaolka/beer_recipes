import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const registerUser = async newUserData => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      newUserData.email,
      newUserData.password
    );

    await updateProfile(auth.currentUser, {
      displayName: newUserData.username,
    });
    const { uid, displayName, email } = auth.currentUser;
    return { uid, displayName, email };
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

export const logInUser = async userData => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const { uid, displayName, email } = user;
    return { uid, displayName, email };
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

export const logOutUser = async _ => {
  try {
    await signOut(auth);
  } catch (error) {
    return error.message;
  }
};
