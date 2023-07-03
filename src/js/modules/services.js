import { nanoid } from 'nanoid';
import { initializeApp } from "firebase/app";
import { getDatabase, get, set, remove, ref, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZdpNFfeo4_1X6_hBUPMRqYcN6xRvkQXU",
  authDomain: "myportfolio-f2b83.firebaseapp.com",
  databaseURL: "https://myportfolio-f2b83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myportfolio-f2b83",
  storageBucket: "myportfolio-f2b83.appspot.com",
  messagingSenderId: "386251317971",
  appId: "1:386251317971:web:706111e97eff1895fe6a26",
  measurementId: "G-45N5XGJYSG"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase();

function getResource(recourse) {
  const recourseRef = ref(db, recourse);
  return new Promise((resolve, reject) => {
    get(recourseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const recourseValue = snapshot.val();
          resolve(recourseValue);
        } else {
          console.log("Данные отсутствуют");
          resolve(null);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}


function postData(data) {
  const enterId = nanoid(5);
  const recourseRef = ref(db, "Employer/" + enterId);
  return new Promise((resolve, reject) => {
    set(recourseRef,data)
    .then(() => {
      resolve(data);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}

export {postData};
export {getResource};

