import { Model } from '@vuex-orm/core'

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users'

  static primaryKey = 'id'

  /**
   * name: ユーザーの名前
   * twitter_id: ユーザーのツイッターid
   */
  static fields () {
    return {
      id: this.increment(null),
      name: this.string('hoge'),
      twitter_id: this.string('')
    }
  }
}