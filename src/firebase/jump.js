import firebase from 'firebase/app';
import 'firebase/firestore';

import { store } from './index';

const jumpMasterRef = store.collection('jump-master');
const jumpBeginner = store.collection('jump-beginner');

export function postJumpNumber(date, number) {
  const res = jumpMasterRef
    .doc(date)
    .get()
    .then((doc) => {
      if (doc.exists) {
        jumpMasterRef.doc(date).update({
          date,
          number,
        });
      } else {
        jumpMasterRef.doc(date).set({
          date,
          number,
        });
      }
    });
  return res;
}
