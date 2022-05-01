// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUe2FQnusS92kXe0nyTZDPkf2HR50QxVg',
  authDomain: 'travel-3eb3d.firebaseapp.com',
  projectId: 'travel-3eb3d',
  storageBucket: 'travel-3eb3d.appspot.com',
  messagingSenderId: '452492883871',
  appId: '1:452492883871:web:04df6128c95fb5909bafaa',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
