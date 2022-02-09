import 'firebase/auth';
import 'firebase/firestore';

import { auth } from './index';

export function signInWithEmailPassword(email, password) {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      return user.uid;
    })
    .catch((error) => {
      alert(error.message);
    });
}
