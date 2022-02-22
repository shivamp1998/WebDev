
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyC8hP1L-E0nWZH8WMRhQqH5rV02jmDLYNw",
  authDomain: "push-notifications-20f90.firebaseapp.com",
  projectId: "push-notifications-20f90",
  storageBucket: "push-notifications-20f90.appspot.com",
  messagingSenderId: "582786857700",
  appId: "1:582786857700:web:4979122d7f9eb692b0caf1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = "BMayH_z8vqDBTEF7A8kE8eiaWf-te8sKZjqk3ESeJy0gQM-AzbGMHTU9d0qNS_ddCL5-gXw36FJ53c4_WxnoroU";

export const getToken = async (setTokenFound) => {
    let currentToken = '';
    try {
        currentToken = await messaging.getToken({vapidKey: publicKey});

        if(currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false);
        }
    }
    catch(err) {
        console.log(err);
    }
    return currentToken;
};

export const onMessageListener = () => {
    return new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        })
        
    })
}

// export const onBackgroundMessageListener = () => {
//     return new Promise((resolve) => {
//         messaging.onBackgroundMessage((payload) => {
//             resolve(payload);
//         })
//     })
// }
