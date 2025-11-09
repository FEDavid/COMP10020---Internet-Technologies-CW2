// File: app/teams/actions/read.tsx
import { sql } from '@/app/lib/db';

// Imports
import CommentsList from '../client/CommentsList'

// Read all comments
export async function ReadAll() {
  const rows = await sql`SELECT id, comment FROM comments`;
  return <CommentsList comments={rows} />;
}

// Read a single comment by ID
export async function ReadSingle(id: number) {
  // Fetch a single comment by ID
  const rows = await sql`SELECT id, comment FROM comments WHERE id = ${id}`;
  return rows[0];
}


