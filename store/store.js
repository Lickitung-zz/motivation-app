import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'


if (!firebase.apps.length) {
  var db = firebase.initializeApp({ projectId: 'motivation-app-17475' }).firestore()
  ;
}

export const store = new Vuex.Store({
  // setup the reactive todos property
  state: {
    messages: ['Howdy'],
  },

  mutations: vuexfireMutations,

  actions: {
    bindMessages: firestoreAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirestoreRef` and `unbindFirestoreRef`
      // we return the promise returned by `bindFirestoreRef` that will
      // resolve once data is ready
      return context.bindFirestoreRef('messages', db.collection('messages'))
    }),
  },
})