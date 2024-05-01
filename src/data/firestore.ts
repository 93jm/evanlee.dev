// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { ProjectProps } from "@/types/project";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app)
//프로젝트 가져오기
export async function fetchProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));

  if (querySnapshot.empty) {
    return [];
  }

  const fetchedProjects: ProjectProps[] = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

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

export { getAuth, GithubAuthProvider, signInWithPopup };
