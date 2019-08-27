<template lang="pug">
  .container

</template>
<script>
export default {
  methods: {
    twitterLogin() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>
<style>
</style>