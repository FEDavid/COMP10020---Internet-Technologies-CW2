// File: app/teams/actions/delete.tsx
'use server';
import { sql } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

export async function DeleteComment(id: number) {
  await sql`DELETE FROM comments WHERE id = ${id}`;
  revalidatePath('/teams');
}
