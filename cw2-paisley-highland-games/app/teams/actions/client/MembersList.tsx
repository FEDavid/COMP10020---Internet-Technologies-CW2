// File: app/teams/client/MembersList.tsx
'use client';

type Member = {
  member_id: number;
  member_name: string;
};

type Team = {
  team_id: number;
  team_location: string;
  ticket_id: number;
};

type Props = {
  team: Team;
  members: Member[];
};

export default function MembersList({ team, members }: Props) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg mt-4">
      <h2 className="text-lg font-bold mb-2">{team.team_location}</h2>
      {members.length > 0 ? (
        <ul className="list-disc list-inside text-gray-300">
          {members.map((m) => (
            <li key={m.member_id}>{m.member_name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No members yet</p>
      )}
    </div>
  );
}
