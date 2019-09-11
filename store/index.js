import VuexORM from '@vuex-orm/core'
import User from '@/models/User'
import Auth from '@/models/Auth'
import Board from '@/models/Board'


// Create new instance of Database.
const database = new VuexORM.Database()

// Register Models.
database.register(User)
database.register(Auth)
database.register(Board)

export const plugins = [VuexORM.install(database)
]