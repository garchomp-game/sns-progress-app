<template lang='pug'>
v-layout(column='', justify-center='', align-center='')
  v-card(max-width='544')
    v-card-title hello world

  v-list
    v-list-item(v-for="(item, index) in board" :key="index")
      span {{ item.name }}
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import Board from "@/models/Board"
import { reduce, num } from "lodash"

export default {
  data() {
    return {
      isLogin: false,
      board: []
    }
  },
  computed: {
    /**
     * @return {number} totalTime 合計時間
     */
    async totalTime() {
      // currentTimeの合計を求めたもの
      const numList = await map(this.board, (num) => num)
      return await reduce(numList, (result, num) => result + num)
    }
  },
  mounted: function() {
    this.board = Board.all()
  }
}
</script>
