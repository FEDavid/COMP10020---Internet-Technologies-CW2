// File: app/teams/actions/read.tsx
import { sql } from '@/app/lib/db';
import TeamsList from '../client/TeamsList';
import MembersList from '../client/MembersList';

// Read all teams (with members)
export async function ReadAll() {
  const teams = await sql`SELECT * FROM teams ORDER BY team_id`;
  const members = await sql`SELECT user_id, user_name, team_id FROM users`;

  const teamsWithMembers = teams.map((team: any) => ({
    ...team,
    members: members.filter((m: any) => m.team_id === team.team_id),
  }));

  return <TeamsList teams={teamsWithMembers} />;
}

// Read a single team and its members
export async function ReadOne(id: number) {
  const teamRows = await sql`SELECT * FROM teams WHERE team_id = ${id}`;
  if (teamRows.length === 0) return <p>Team not found</p>;

  const members = await sql`SELECT member_id, member_name FROM members WHERE team_id = ${id}`;
  return <MembersList team={teamRows[0] as any} members={members as any} />;
}
