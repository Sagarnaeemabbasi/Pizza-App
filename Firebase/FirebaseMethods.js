import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {onValue} from '@react-native-firebase/database';

const SignUpUser = obj => {
  const {email, password} = obj;
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        database()
          .ref(`appUsers/${res.user.uid}`)
          .set(obj)
          .then(() => {
            resolve('Signp Successfully');
          })
          .catch(dbError => {
            reject(dbError);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};

const loginUser = obj => {
  const {email, password} = obj;
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(sucesss => {
        resolve(sucesss);
      })
      .catch(error => {
        const errMessage = error.code;
        reject(errMessage);
      });
  });
};

const sendData = (userObj, userName, id) => {
  return new Promise((resolve, reject) => {
    let postListRef;
    if (id) {
      database().ref(`${userName}/${id}`);
    } else {
      const newReference = database().ref(userName).push().key;
      postListRef = database()
        .ref(`${userName}/${newReference}`)
        .set(userObj)
        .then(success => {
          resolve(`Data sent succcessfully to this ${userName}`);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};

const getData = (userName, id) => {
  // const reference = database().ref(`${userName}/${id ? id : ''}`);
  return new Promise((resolve, reject) => {
    database()
      .ref(`${userName}/${id ? id : ''}`)
      .on('value', snapshot => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          if (id) {
            resolve(data);
          } else {
            let arr = Object.values(data);
            resolve(arr);
          }
        } else {
          reject('no data found');
        }
      }),
      {
        onlyOnce: false,
      };
  });
};
export {SignUpUser, loginUser, sendData, getData};
