import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { ProjectProps } from "@/types/project";
import { signOut, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//프로젝트 가져오기
export async function fetchProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  if (querySnapshot.empty) {
    return [];
  }

  const fetchedProjects: ProjectProps[] = [];
  querySnapshot.forEach((doc) => {
    const obj = {
      id: doc.data()["id"],
      projectName: doc.data()["projectName"],
      imgUrl: doc.data()["imgUrl"],
      links: doc.data()["links"],
      period: doc.data()["period"],
      isWorking: doc.data()["isWorking"],
      stack: doc.data()["stack"],
      otherStack: doc.data()["otherStack"],
      description: doc.data()["description"],
    };
    fetchedProjects.push(obj);
  });
  return fetchedProjects;
}

export async function addProjects() {}

export { signOut, GithubAuthProvider, signInWithPopup };
