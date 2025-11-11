// File: app/teams/actions/read.tsx
import { sql } from '@/app/lib/db';

// Imports
import EventsList from '../client/EventsList';

// Read all events sorted by date in descending order
export async function ReadAll() {
  const rows = await sql`SELECT event_id, event_date, event_desc FROM events ORDER BY event_date`;
  return <EventsList events={rows} />;
}