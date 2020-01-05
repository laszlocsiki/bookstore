import * as firebase from 'firebase';

export const AuthProviders = {
  FACEBOOK: new firebase.auth.FacebookAuthProvider(),
  GOOGLE: new firebase.auth.GoogleAuthProvider()
};
