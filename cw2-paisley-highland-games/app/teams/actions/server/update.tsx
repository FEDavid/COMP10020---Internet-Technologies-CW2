// File: app/teams/actions/update.tsx
'use server';
import { sql } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

// Update an existing comment
export async function UpdateComment(id: number, newComment: string) {
  await sql`UPDATE comments SET comment = ${newComment} WHERE id = ${id}`;
  revalidatePath('/teams');
}

// Handle the update form submission
export async function HandleUpdate(formData: FormData) {
  const id = Number(formData.get('id'));
  const comment = String(formData.get('comment'));
  await UpdateComment(id, comment);
}
