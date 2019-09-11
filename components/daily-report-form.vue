<template lang='pug'>
.container
  v-layout.d-flex.justify-center
    .col-md-6
      v-btn.info(@click='back') 戻る
  v-layout.d-flex.justify-center
    v-form.col-md-6
      v-text-field(v-model='clubName' placeholder='部活名') 
      v-text-field(v-model='currentTime' placeholder='作業時間')
      v-textarea(v-model='comment' placeholder='コメント') 
      v-btn.primary(block @click='submit') {{ text }}
</template>
<script>

import Board from '@/models/Board'
export default {
  name: "DairyReportForm",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      clubName: "",
      currentTime: null,
      comment: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async submit() {
      await Board.create({
        data: {
          clubName: this.clubName,
          currentTime: this.currentTime,
          comment: this.comment,
        }
      })
      // firebaseに保存
      await this.$router.push('/')
    }
  }
};
</script>
<style lang='sass'>
    
</style>