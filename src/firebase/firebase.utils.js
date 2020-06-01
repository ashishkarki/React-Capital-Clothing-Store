import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBmeRoWbGiDXbBYqubskpegTaEtZ5SMFjE',
  authDomain: 'capital-clothing-db.firebaseapp.com',
  databaseURL: 'https://capital-clothing-db.firebaseio.com',
  projectId: 'capital-clothing-db',
  storageBucket: 'capital-clothing-db.appspot.com',
  messagingSenderId: '205981021087',
  appId: '1:205981021087:web:dc80194fa51da14231c3aa',
  measurementId: 'G-R50RCNHQX1',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
