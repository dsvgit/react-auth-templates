import { auth } from "@/common/firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthChangeEvent, AuthClientBase, Session } from "@/auth-base/types";

export type SignUpWithPasswordCredentials = {
  email: string;
  password: string;
};

class FirebaseClient implements AuthClientBase {
  initialized = false;

  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ): () => boolean {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!this.initialized) {
        // TODO: callback("INITIAL_SESSION", { user });
        this.initialized = true;
      }

      if (user) {
        // TODO: callback("SIGNED_IN", { user });
      } else {
        // TODO: callback("SIGNED_OUT", { user });
      }
    });

    return () => {
      unsubscribe();
      return true;
    };
  }

  async signInWithPassword(credentials: SignUpWithPasswordCredentials) {
    return await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
  }

  async signUp(credentials: SignUpWithPasswordCredentials) {
    return await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
  }

  async signOut() {
    return await signOut(auth);
  }
}

export const firebaseClient = new FirebaseClient();
