import { onAuthStateChanged, signInAnonymously, type User } from "firebase/auth";

import { auth } from "@/data/firestore";

export const SIGNED_OUT_INTERACTION_USER_KEY = "signed-out";

export function getInteractionUserKey(user: User | null) {
  return user?.uid ?? SIGNED_OUT_INTERACTION_USER_KEY;
}

export async function waitForAuthReady(): Promise<User | null> {
  if (auth.currentUser) {
    return auth.currentUser;
  }

  return new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

export async function getOrCreateAnonymousInteractionUser() {
  const currentUser = await waitForAuthReady();

  if (currentUser) {
    return currentUser;
  }

  const credential = await signInAnonymously(auth);
  return credential.user;
}

export function subscribeInteractionUser(onChange: (user: User | null) => void) {
  return onAuthStateChanged(auth, onChange);
}
