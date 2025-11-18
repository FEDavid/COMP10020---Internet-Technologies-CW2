'use server';

import { Pool } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function NewTeam(formData: FormData) {
  const team_location = formData.get('team_location');
  if (!team_location) return;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // 1. Create the ticket
    const {
      rows: [{ ticket_id }],
    } = await client.query(
      'INSERT INTO tickets (order_date) VALUES (CURRENT_DATE) RETURNING ticket_id'
    );

    // 2. Create the team using that ticket_id
    await client.query(
      'INSERT INTO teams (ticket_id, team_location) VALUES ($1, $2)',
      [ticket_id, team_location]
    );

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Transaction failed:', err);
    throw err;
  } finally {
    client.release();
  }

  revalidatePath('/teams');
}
