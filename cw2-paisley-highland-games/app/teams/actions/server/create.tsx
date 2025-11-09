// File: app/teams/actions/create.tsx
'use server';


// Imports
import { sql } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

// Create a new comment
export async function NewComment(formData: FormData) {
const comment = formData.get('comment');

  if (!comment) return;

  await sql`INSERT INTO comments (comment) VALUES (${comment})`;

  // This tells Next.js to refetch all server components on /teams
  revalidatePath('/teams');
}