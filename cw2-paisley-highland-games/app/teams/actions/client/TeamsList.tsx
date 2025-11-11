'use client';
import { useState } from 'react';
import { HandleUpdate } from '../server/update';
import { DeleteTeam } from '../server/delete';

export default function TeamsList({ teams }: { teams: any[] }) {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [values, setValues] = useState<Record<number, string>>(
        Object.fromEntries(teams.map((c) => [c.team_id, c.team_location ?? '']))
    );


    const startEdit = (id: number) => setEditingId(id);
    const cancelEdit = (id: number) => {
        setEditingId(null);
        setValues((v) => ({ ...v, [id]: teams.find((c) => c.team_id === id)?.team_location || '' }));
    };

    const handleChange = (id: number, val: string) =>
        setValues((v) => ({ ...v, [id]: val }));

    const handleSave = async (id: number) => {
        const formData = new FormData();
        formData.append('id', id.toString());
        formData.append('team_location', values[id]);
        await HandleUpdate(formData);
        setEditingId(null);
    };

    return (
        <section
            className='w-full mt-8'>
            <h1 className="text-3xl font-bold underline mb-4 text-center">View Teams</h1>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                {teams.map((row, i) => (
                    <li
                        key={row.team_id ?? i}
                        className="p-2 bg-gray-700 rounded-lg grid grid-cols-[1fr_auto] items-center gap-2"
                    >
                        <p className="flex items-center gap-2">
                            <b>Ticket ID {row.ticket_id}</b>:
                            <input
                                type="text"
                                className="bg-gray-800 text-white p-1 rounded-md flex-1 px-2"
                                disabled={editingId !== row.team_id}
                                value={values[row.team_id] ?? ''}
                                onChange={(e) => handleChange(row.team_id, e.target.value)}
                            />

                        </p>

                        <span className="flex gap-2">
                            {editingId === row.team_id ? (
                                <>
                                    <button
                                        onClick={() => handleSave(row.team_id)}
                                        className="px-3 py-1 bg-green-700 rounded-lg"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => cancelEdit(row.team_id)}
                                        className="px-3 py-1 bg-gray-600 rounded-lg"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => startEdit(row.team_id)}
                                    className="cursor-pointer px-4 py-1 bg-gray-900 rounded-lg"
                                >
                                    Edit
                                </button>
                            )}

                            <form action={DeleteTeam.bind(null, row.team_id)}>
                                <button className="cursor-pointer px-4 py-1 bg-gray-900 rounded-lg">
                                    Delete
                                </button>
                            </form>
                        </span>
                        <span className="col-span-2 mt-2">
                            <p className="text-sm text-gray-300">Members:</p>
                            {row.members.length > 0 ? (
                                <ul className="pl-4 list-disc text-sm">
                                    {row.members.map((m: any) => (
                                        <li key={m.user_id}>{m.user_name}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-sm">No members assigned</p>
                            )}
                        </span>

                    </li>
                ))}
            </ul>
        </section>
    );
}
