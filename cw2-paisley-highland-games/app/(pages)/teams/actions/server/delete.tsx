// File: app/teams/actions/delete.tsx
'use server';
import { sql } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

export async function DeleteTeam(id: number) {
  await sql`DELETE FROM teams WHERE team_id = ${id}`;
  revalidatePath('/teams');
}
