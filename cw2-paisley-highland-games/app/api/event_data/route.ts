// cw2-paisley-highland-games/app/api/event_data/route.ts

import { sql } from '@/app/lib/db';

// Read all events sorted by date in descending order
export async function ReadAll() {
  const rows = await sql`SELECT event_id, event_date, event_desc FROM events ORDER BY event_date`;
  return rows;
}

// Expose an API endpoint to get event data
export async function GET() {
    const events = await ReadAll();
    return Response.json(events);
}