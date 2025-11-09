'use client';
import { useState } from 'react';
import { HandleUpdate } from '../server/update';
import { DeleteComment } from '../server/delete';

export default function CommentsList({ comments }: { comments: any[] }) {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [values, setValues] = useState<Record<number, string>>(
        Object.fromEntries(comments.map((c) => [c.id, c.comment ?? '']))
    );


    const startEdit = (id: number) => setEditingId(id);
    const cancelEdit = (id: number) => {
        setEditingId(null);
        setValues((v) => ({ ...v, [id]: comments.find((c) => c.id === id)?.comment || '' }));
    };

    const handleChange = (id: number, val: string) =>
        setValues((v) => ({ ...v, [id]: val }));

    const handleSave = async (id: number) => {
        const formData = new FormData();
        formData.append('id', id.toString());
        formData.append('comment', values[id]);
        await HandleUpdate(formData);
        setEditingId(null);
    };

    return (
        <section>
            <h1 className="text-3xl font-bold underline mb-4">View Comments</h1>
            <ul className="grid gap-4">
                {comments.map((row, i) => (
                    <li
                        key={row.id ?? i}
                        className="p-2 bg-gray-700 rounded-lg grid grid-cols-[1fr_auto] items-center gap-2"
                    >
                        <p className="flex items-center gap-2">
                            <b>Comment no {i + 1}</b>:
                            <input
                                type="text"
                                className="bg-gray-800 text-white p-1 rounded-md flex-1"
                                disabled={editingId !== row.id}
                                value={values[row.id] ?? ''}
                                onChange={(e) => handleChange(row.id, e.target.value)}
                            />

                        </p>

                        <span className="flex gap-2">
                            {editingId === row.id ? (
                                <>
                                    <button
                                        onClick={() => handleSave(row.id)}
                                        className="px-3 py-1 bg-green-700 rounded-lg"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => cancelEdit(row.id)}
                                        className="px-3 py-1 bg-gray-600 rounded-lg"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => startEdit(row.id)}
                                    className="cursor-pointer px-4 py-1 bg-gray-900 rounded-lg"
                                >
                                    Edit
                                </button>
                            )}

                            <form action={DeleteComment.bind(null, row.id)}>
                                <button className="cursor-pointer px-4 py-1 bg-gray-900 rounded-lg">
                                    Delete
                                </button>
                            </form>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
