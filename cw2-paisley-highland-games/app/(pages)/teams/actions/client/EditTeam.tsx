'use client';
import { useState } from 'react';

export default function EditComment({
  id,
  updateAction,
}: {
  id: number;
  updateAction: (formData: FormData) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');

  // when entering edit mode, load the input's value
  const enableEdit = () => {
    const input = document.getElementById(`comment-${id}`) as HTMLInputElement | null;
    if (input) {
      setValue(input.value);
      input.removeAttribute('disabled');
      input.focus();
    }
    setEditing(true);
  };

  // when saving, push value to server
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById(`comment-${id}`) as HTMLInputElement | null;
    if (!input) return;
    input.setAttribute('disabled', 'true');

    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('comment', input.value);

    await updateAction(formData);
    setEditing(false);
  };

  const handleCancel = () => {
    const input = document.getElementById(`comment-${id}`) as HTMLInputElement | null;
    if (input) {
      input.value = value; // revert
      input.setAttribute('disabled', 'true');
    }
    setEditing(false);
  };

  return (
    <form onSubmit={handleSave} className="flex gap-2">
      {editing ? (
        <>
          <button
            type="submit"
            className="px-3 py-1 bg-green-700 rounded-lg"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-600 rounded-lg"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={enableEdit}
          className="cursor-pointer px-4 py-1 bg-gray-900 rounded-lg"
        >
          Edit
        </button>
      )}
    </form>
  );
}
