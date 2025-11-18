// cw2-paisley-highland-games/app/api/team_data/route.ts

import { sql } from '@/app/lib/db';

// Read all teams (with members)
export async function ReadAll() {
  const teams = await sql`SELECT * FROM teams ORDER BY team_id`;
  const members = await sql`SELECT user_id, user_name, team_id FROM users`;

  const teamsWithMembers = teams.map((team: any) => ({
    ...team,
    members: members.filter((m: any) => m.team_id === team.team_id),
  }));

  return teamsWithMembers;
}

// Expose an API endpoint to get team data
export async function GET() {
    const teams = await ReadAll();
    return Response.json(teams);
}