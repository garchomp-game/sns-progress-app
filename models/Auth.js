import { Model } from '@vuex-orm/core'

export default class Auth extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'auths'

  /**
   * name: ユーザーの名前
   * twitter_id: ユーザーのツイッターid
   */
  static fields () {
    return {
      name: this.string(''),
      token: this.string(''),
      twitter_id: this.string('')
    }
  }
}