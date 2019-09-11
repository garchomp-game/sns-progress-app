<template lang='pug'>
.container
  v-card
    h1 {{testMessage}}
    v-list(v-show='board.length != 0')
      v-list-item(v-for='(item, index) in board' :key='index')
        v-list-item-content
          span {{ item.clubName }}
    v-list(v-show='board.length == 0')
      v-list-item
        v-list-item-content
          span まだ進捗記録がありません。早速進捗を記録してみましょう！
      v-list-item
        v-col.text-center
          v-btn(color='primary' to='daily-report-screen') 進捗を記入する
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Board from "@/models/Board";
import { reduce, num } from "lodash";

export default {
  data() {
    return {
      isLogin: false,
      board: [],
      testMessage: ""
    };
  },
  async created() {
    const { data } = await this.$axios.get('http://localhost:8000/twitter/index');
    this.testMessage = data
  },
  computed: {
    /**
     * @return {number} totalTime 合計時間
     */
    async totalTime() {
      // currentTimeの合計を求めたもの
      const numList = await map(this.board, num => num);
      return await reduce(numList, (result, num) => result + num);
    }
  },
  mounted() {
    this.board = Board.all();
  }
};
</script>
