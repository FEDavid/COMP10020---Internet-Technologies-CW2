export default function Contact() {
return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] px-4">

    <h1 className="text-5xl font-bold mt-12 text-center">Contact</h1>

    <p className="text-xl mt-4 mb-10 text-center">
        Any questions or remarks? Just write us a message.
    </p>

    <form className="flex flex-col w-full max-w-xl gap-6">

        {/* Email */}
        <label className="text-sm font-semibold">Email</label>
        <input
        type="email"
        className="w-full p-3 rounded-lg border border-gray-300 text-black"
        placeholder="your-email@example.com"
        />

        {/* Message */}
        <label className="text-sm font-semibold">Write your message</label>
        <textarea
        className="w-full h-32 p-3 rounded-lg border border-gray-300 text-black"
        placeholder="Your message..."
        />

        {/* Submit button */}
        <button
        type="submit"
        className="mt-4 py-3 px-6 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl shadow-md"
        >
        Submit
        </button>

    </form>
    </div>
);
}
