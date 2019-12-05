import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCvH2wmhLLrMtYxeIwvy58lzgdubp9rMlA',
  authDomain: 'quadrinhos-avenida.firebaseapp.com',
  databaseURL: 'https://quadrinhos-avenida.firebaseio.com',
  projectId: 'quadrinhos-avenida',
  storageBucket: 'quadrinhos-avenida.appspot.com',
  messagingSenderId: '115883473019',
  appId: '1:115883473019:web:e98876987d5e8cb3a74ade',
  measurementId: 'G-PS95K80YXL'
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
