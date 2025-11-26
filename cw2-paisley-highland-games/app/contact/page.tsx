export default function Contact() {
return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] px-4">

    <h1 className="text-5xl font-bold mt-12 text-center text-[#43619f]">Contact Us</h1>

    <p className="text-xl mt-4 mb-10 text-center">
        Any questions or remarks? Just write us a message.
    </p>

    <form className="flex flex-col w-full max-w-xl gap-6">

        <label className="text-sm font-semibold">Email</label>
        <input
        type="email"
        className="w-full p-3 rounded-lg border border-black bg-[#43619f] text-white"
        placeholder="your-email@example.com"
        />

        <label className="text-sm font-semibold">Write your message</label>
        <textarea
        className="w-full h-32 p-3 rounded-lg border border-black bg-[#43619f] text-white"
        placeholder="Your message..."
        />

        <button
        type="submit"
        className="mt-4 py-3 px-6 bg-[#14182f] hover:bg-[#1c2143] text-white font-semibold rounded-xl shadow-md"
        >
        Submit
        </button>

    </form>
    </div>
);
}
