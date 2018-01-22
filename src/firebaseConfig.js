import Firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyCf38k_b_Gc5yMotkAlkRWlm-2xzDXFtRI',
  authDomain: 'pizza-planet-6d051.firebaseapp.com',
  databaseURL: 'https://pizza-planet-6d051.firebaseio.com',
  projectId: 'pizza-planet-6d051',
  storageBucket: '',
  messagingSenderId: '138457178240',
}
const firebaseApp = Firebase.initializeApp(config)

const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')
export const dbTodosRef = db.ref('todos')
