import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()
    table.uuid('session_id').index().unique()
    table.text('name').notNullable()
    table.text('email').notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users')
}

