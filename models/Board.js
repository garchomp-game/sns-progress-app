import { Model } from '@vuex-orm/core'
export default class Board extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'boards'

  static primaryKey = 'id'

  /**
   * @return {Object} obj 戻り値
   * @return {Increment} obj.id 主キー
   * @return {String} obj.clubName 部活名
   * @return {String} obj.currentTime 作業時間
   * @return {String} obj.comment コメント
   */
  static fields () {
    return {
      id: this.increment(null),
      clubName: this.string(''),
      currentTime: this.number(null),
      comment: this.string(''),
    }
  }

  
}