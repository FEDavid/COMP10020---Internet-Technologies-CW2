// File: app/teams/actions/update.tsx
'use server';
import { sql } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

// Update an existing comment
export async function UpdateTeam(id: number, newLocation: string) {
  await sql`UPDATE teams SET team_location = ${newLocation} WHERE team_id = ${id}`;
  revalidatePath('/teams');
}

// Handle the update form submission
export async function HandleUpdate(formData: FormData) {
  const id = Number(formData.get('id'));
  const newLocation = String(formData.get('team_location'));
  await UpdateTeam(id, newLocation);
}
