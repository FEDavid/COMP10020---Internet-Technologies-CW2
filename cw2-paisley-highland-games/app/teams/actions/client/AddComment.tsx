//File: cw2-paisley-highland-games/app/teams/actions/client/AddComment.tsx
'use client';

import { useRouter } from 'next/navigation';
import { NewComment } from '../server/create';

export default function AddCommentForm() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await NewComment(formData);
    router.refresh(); // <- this makes the page re-fetch from server
  }

  return (
    <form action={handleSubmit} className="flex mt-4 rounded-lg">
      <h1 className="text-1xl font-bold h-full bg-gray-600 p-2 rounded-s-lg px-4">Add Comment</h1>
      <input
        type="text"
        name="comment"
        placeholder="Add a comment..."
        className="p-2 bg-gray-700 flex-1"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-900 rounded-r-lg"
      >
        Submit
      </button>
    </form>
  );
}
