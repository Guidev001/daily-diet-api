// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Users {
    users: {
      id: string
      session_id?: string
      name: string
      email: string
      created_at: string
    }
  }
}

