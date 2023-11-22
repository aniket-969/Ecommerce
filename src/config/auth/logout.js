import { getAuth, signOut } from "firebase/auth";

export const logout = async () => {

  try {
    
  const auth = getAuth();

    await signOut(auth);
    localStorage.clear();
  
  } catch (err) {
    console.error(err);
  }
};