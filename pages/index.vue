<template lang='pug'>
v-layout(column='', justify-center='', align-center='')
  v-card(max-width='544')
    v-card-title hello world

  v-list
    v-list-item(v-for="(item, index) in testUser" :key="index")
      span {{ item.name }}
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import User from '@/models/User';

export default {
  data() {
    return {
      isLogin: false,
      user: [],
      testUser: []
    };
  },
  mounted: function() {
    User.new()
    this.testUser = User.all()
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
};
</script>
