import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser
const timestamp = firebase.firestore.FieldValue.serverTimestamp()
const GoogleProvider = new firebase.auth.GoogleAuthProvider()

const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const notesCollection = db.collection('notes')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  timestamp,
  GoogleProvider,
  usersCollection,
  postsCollection,
  notesCollection,
  commentsCollection,
  likesCollection
}
