<template lang='pug'>
v-layout(column='', justify-center='', align-center='')
  v-card(max-width='544')
    v-card-title hello world hello world hello world hello world hello world hello world
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      isLogin: false,
      user: []
    };
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true;
        this.user = user;
      } else {
        this.isLogin = false;
        this.user = [];
      }
    });
  },
  methods: {
    twitterLogin() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout() {
      firebase.auth().signOut();
    }
  }
};
</script>
