import React, {useState} from 'react';
import { onMessageListener, onBackgroundMessageListener } from './firebaseInit';
import { getMessaging } from 'firebase/messaging';
import { onBackgroundMessage } from 'firebase/messaging/sw';

import ReactNotificationComponent from './components/Notifications/ReactNotification';
import Notifications from './components/Notifications/Notifications';
function App(){
      const self = this;
      const [show,setShow] = useState(false);
      const [notification, setNotification] = useState({title: '',body:''});

      onMessageListener()
      .then((payload) => {
        setShow(true);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body
        });
        console.log(payload);
      })
      .catch((err) => {
        console.log(err);
      })

      // onBackgroundMessageListener().then((payload) => {
      //   setShow(true);
      //   setNotification({
      //     title: payload.notification.title,
      //     body: payload.notification.body
      //   })
      //  self.showNotification(notification.title, notification.body)
      //   console.log(payload)
      // })
      // .catch(err => {
      //   console.log(err);
      // })

      // const messaging = getMessaging();
      // onBackgroundMessage(messaging, (payload) => {
      //   console.log(payload);
      //   const notificationTitle = notification.title;
      //   const notificationOptions = {
      //     body: 'Background Message Body',
      //     icon: '/firebase-logo.png'
      //   };
      //   self.registration.showNotification(notificationTitle,notificationOptions)
      // });
      return (
        <div>
          {
            show ? (
              <ReactNotificationComponent title={notification.title} body={notification.body} />
            ) : <Notifications />
          }

        </div>
      )
}

export default App;
