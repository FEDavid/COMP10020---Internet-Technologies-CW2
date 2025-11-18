'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { NewTeam } from '../server/create';

export default function AddTeamForm() {
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        // server action executes
        await NewTeam(formData);
        // then client refreshes the page data
        startTransition(() => router.refresh());
        window.location.reload();
      }}
      className="flex mt-4 rounded-lg"
    >
      <h1 className="text-1xl font-bold h-full bg-gray-600 p-2 rounded-s-lg px-4">
        Add Team
      </h1>
      <input
        type="text"
        name="team_location"
        placeholder="Add a team.."
        className="p-2 bg-gray-700 flex-1"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-900 rounded-r-lg cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
