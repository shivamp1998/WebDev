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
