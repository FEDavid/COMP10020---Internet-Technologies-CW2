// File: cw2-paisley-highland-games/app/(pages)/profile/page.tsx
import Image from "next/image";

export default async function Teams() {
    return (
        <section id="profile_section" className="mt-16 bg-(--secondary1-2) rounded-2xl p-6 shadow-md/10">
            <div id="profileDetails" className="grid grid-cols-[1fr_112px] gap-4">
                {/* Column 1 */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                    <p className="mb-2"><span className="font-semibold">Name:</span> John Doe</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> john.doe@example.com</p>
                </div>
                {/* Column 2 */}
                <div className="h-full w-full relative bg-(--secondary1-1) rounded-full overflow-hidden inset-shadow-sm/10">
                      <Image
                        src="/media/default_account.svg"
                        alt="Paisley Highland Games"
                        fill={true}
                        className="h-full w-full object-contain relative"
                      />
                </div>
            </div>
            <hr className="my-8 text-(--secondary1-1)" />
            <div id="profileActions" className="flex flex-col md:flex-row gap-4">
                <button className="bg-(--secondary1-3) text-white px-4 py-2 rounded-lg hover:bg-(--secondary1-4) transition shadow-sm">Edit Profile</button>
                <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-sm">Logout</button>
                <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition shadow-sm">GDPR</button>
            </div>
        </section>
    );
}