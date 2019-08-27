import VuexORM from '@vuex-orm/core'
import User from '@/models/User'
import Auth from '@/models/Auth'


// Create new instance of Database.
const database = new VuexORM.Database()

// Register Models.
database.register(User)
database.register(Auth)

export const plugins = [ VuexORM.install(database) ]
